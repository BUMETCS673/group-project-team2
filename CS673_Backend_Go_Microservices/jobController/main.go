package main

// Lambda for Create User

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"os"
	"strconv"
	"strings"

	"github.com/aws/aws-lambda-go/lambda"
	"gorm.io/driver/postgres"

	"gorm.io/gorm"

	"github.com/aws/aws-lambda-go/events"
	"github.com/valyala/fastjson"
)

// Decoded JWT

type DecodedTokenT struct {
	Email string   `json:"https://cs673jwtbackend.com/email"`
	Iss   string   `json:"iss"`
	Sub   string   `json:"sub"`
	Aud   []string `json:"aud"`
	Iat   int      `json:"iat"`
	Exp   int      `json:"exp"`
	Azp   string   `json:"azp"`
	Scope string   `json:"scope"`
}

func GetAuthenticatedEmail(token string) string {
	parsedToken := strings.Split(token, " ")
	splitToken := strings.Split(parsedToken[1], ".")

	decodedPayload := DecodedTokenT{}

	uDec, err := base64.RawURLEncoding.DecodeString(splitToken[1])
	if err != nil {
		fmt.Println("Error decoding string ", err.Error())
		return ""
	} else {
		fmt.Println(string(uDec), "Success Decoding JWT")
		err := json.Unmarshal(uDec, &decodedPayload)
		if err != nil {
			fmt.Println("Error Parsing")
			return ""
		}
		return decodedPayload.Email
	}
}

type CreateJobRequest struct {
	UserEmail   string `json:"useremail"`
	JobTitle    string `json:"jobtitle"`
	CompanyName string `json:"companyname"`
	Description string `json:"description"`
	Status      string `json:"status"`
}

type Job struct {
	gorm.Model
	UserEmail   string `json:"useremail" gorm:"index:,unique,composite:email_title"`
	JobTitle    string `json:"jobtitle" gorm:"index:,unique,composite:email_title"`
	CompanyName string `json:"companyname"`
	Description string `json:"description"`
	Status      string `json:"status"`
}

type Activity struct {
	gorm.Model
	JobId       string `json:"job_id" gorm:"index:,unique,composite:activity_id"`
	Category    string `json:"category" gorm:"index:,unique,composite:activity_id"`
	Description string `json:"description" gorm:"index:,unique,composite:activity_id"`
	StartDate   string `json:"start_date"`
	EndDate     string `json:"end_date"`
	Status      string `json:"status"`
}

func OpenDatabase() (db *gorm.DB, err error) {
	username := os.Getenv("db_user")
	password := os.Getenv("db_pass")
	dbName := os.Getenv("db_name")
	dbHost := os.Getenv("db_host")
	dbURI := fmt.Sprintf("host=%s user=%s dbname=%s sslmode=disable password=%s", dbHost, username, dbName, password)
	fmt.Println(dbURI)

	//	db2, err := gorm.Open("postgres", dbURI)
	return gorm.Open(postgres.Open(dbURI), &gorm.Config{})
}

func CreateJob(request *CreateJobRequest) (Job, error) {

	db, err := OpenDatabase()

	if err != nil {
		return Job{}, err
	}

	db.AutoMigrate(&Job{})
	job := &Job{}

	job.UserEmail = request.UserEmail
	job.JobTitle = request.JobTitle
	job.CompanyName = request.CompanyName
	job.Description = request.Description
	job.Status = request.Status

	fmt.Println(job)

	result := db.Create(job)

	return *job, result.Error
}

func UpdateJob(request *Job) (Job, error) {

	db, err := OpenDatabase()

	if err != nil {
		return Job{}, err
	}

	//db.AutoMigrate(&Activity{})
	job := &Job{}

	db.First(&job, request.ID)

	job.UserEmail = request.UserEmail
	job.JobTitle = request.JobTitle
	job.CompanyName = request.CompanyName
	job.Description = request.Description
	job.Status = request.Status

	fmt.Println(job)

	result := db.Save(&job)

	fmt.Println("after update", result.Error)

	return *job, result.Error
}

func DeleteJob(request *Job) error {

	db, err := OpenDatabase()

	if err != nil {
		return err
	}

	// db.AutoMigrate(&Job{})
	job := &Job{}

	//job.ID = request.ID
	//job.UserEmail = request.UserEmail
	//job.JobTitle = request.JobTitle
	//job.CompanyName = request.CompanyName
	//job.Description = request.Description
	//job.Status = request.Status

	fmt.Println("deleting Job", job)

	err2 := db.Unscoped().Delete(&job, request.ID)

	if err2.Error != nil {
		fmt.Println(err2)

		return err2.Error
	} else if err2.RowsAffected < 1 {

		return fmt.Errorf("row with id=%d cannot be deleted because it doesn't exist", request.ID)
	}

	fmt.Println("Deleting Activities")

	err3 := db.Exec("delete from activities where job_id=?", strconv.FormatUint(uint64(request.ID), 10))

	if err3.Error != nil {
		fmt.Println(err3.Error)
		return fmt.Errorf("issue deleting associated activities for %d", request.ID)
	}

	return nil

}

func GetAllJobs(email string) ([]Job, error) {
	db, err := OpenDatabase()
	if err != nil {
		return []Job{}, err
	}

	db.AutoMigrate(&Job{})

	var jobs []Job

	// select all rows from Jobs where email == user email
	db.Where("user_email = ?", email).Find(&jobs)

	return jobs, err
}

func main() {
	lambda.Start(HandleRequest)
}

// import (
// 	"fmt"

// 	"github.com/aws/aws-lambda-go/events"
// 	"github.com/aws/aws-lambda-go/lambda"
// 	"github.com/valyala/fastjson"
// )

func HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	fmt.Println(request)
	ApiResponse := events.APIGatewayProxyResponse{}

	email := GetAuthenticatedEmail(request.Headers["Authorization"])
	fmt.Println("Email", email)

	if email == "" {
		ApiResponse = events.APIGatewayProxyResponse{Body: "User Email not found ", StatusCode: 400}
		return ApiResponse, nil
	}

	// Switch for identifying the HTTP request
	switch request.HTTPMethod {
	case "OPTIONS":
		ApiResponse = events.APIGatewayProxyResponse{Headers: map[string]string{
			"Access-Control-Allow-Origin":  "*",
			"Access-Control-Allow-Methods": "POST,OPTIONS,GET",
			"Access-Control-Allow-Headers": "X-Amz-Date,X-Api-Key,X-Amz-Security-Token,X-Requested-With,X-Auth-Token,Referer,User-Agent,Origin,Content-Type,Authorization,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
		}, StatusCode: 200}
		return ApiResponse, nil

	case "GET":
		// Gets ALL jobs for the user
		jobs, err := GetAllJobs(email)
		resp, err2 := json.Marshal(jobs)

		if err2 != nil {
			ApiResponse = events.APIGatewayProxyResponse{Body: fmt.Sprint(err), StatusCode: 400, Headers: map[string]string{
				"Access-Control-Allow-Origin":  "*",
				"Access-Control-Allow-Methods": "POST,OPTIONS,GET",
				"Access-Control-Allow-Headers": "X-Amz-Date,X-Api-Key,X-Amz-Security-Token,X-Requested-With,X-Auth-Token,Referer,User-Agent,Origin,Content-Type,Authorization,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
			}}
			return ApiResponse, nil
		}

		ApiResponse = events.APIGatewayProxyResponse{Headers: map[string]string{
			"Access-Control-Allow-Origin":  "*",
			"Access-Control-Allow-Methods": "POST,OPTIONS,GET",
			"Access-Control-Allow-Headers": "X-Amz-Date,X-Api-Key,X-Amz-Security-Token,X-Requested-With,X-Auth-Token,Referer,User-Agent,Origin,Content-Type,Authorization,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
		}, Body: string(resp), StatusCode: 200}
		return ApiResponse, nil

	case "DELETE":

		jsonBody := Job{}
		err := json.Unmarshal([]byte(request.Body), &jsonBody)
		if err != nil {
			body := "Error: Invalid JSON payload ||| " + fmt.Sprint(err) + " Body Obtained" + "||||" + request.Body
			ApiResponse = events.APIGatewayProxyResponse{Body: body, StatusCode: 500}
			return ApiResponse, nil
		}

		jsonBody.UserEmail = email

		fmt.Println(jsonBody)
		err2 := DeleteJob(&jsonBody)

		if err2 != nil {
			ApiResponse = events.APIGatewayProxyResponse{Headers: map[string]string{
				"Access-Control-Allow-Origin":  "*",
				"Access-Control-Allow-Methods": "POST,OPTIONS",
				"Access-Control-Allow-Headers": "X-Amz-Date,X-Api-Key,X-Amz-Security-Token,X-Requested-With,X-Auth-Token,Referer,User-Agent,Origin,Content-Type,Authorization,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
			}, Body: fmt.Sprintf("row with id=%d cannot be deleted because it doesn't exist", jsonBody.ID), StatusCode: 400}

			// Response
			return ApiResponse, nil
		}

		ApiResponse = events.APIGatewayProxyResponse{Headers: map[string]string{
			"Access-Control-Allow-Origin":  "*",
			"Access-Control-Allow-Methods": "POST,OPTIONS",
			"Access-Control-Allow-Headers": "X-Amz-Date,X-Api-Key,X-Amz-Security-Token,X-Requested-With,X-Auth-Token,Referer,User-Agent,Origin,Content-Type,Authorization,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
		}, Body: "Successfully Deleted Record", StatusCode: 200}

		// Response
		return ApiResponse, nil

	case "POST":
		//validates json and returns error if not working
		err := fastjson.Validate(request.Body)

		if err != nil {
			body := "Error: Invalid JSON payload ||| " + fmt.Sprint(err) + " Body Obtained" + "||||" + request.Body
			ApiResponse = events.APIGatewayProxyResponse{Body: body, StatusCode: 500}
			return ApiResponse, nil
		}

		jsonBody := CreateJobRequest{}
		err = json.Unmarshal([]byte(request.Body), &jsonBody)
		if err != nil {
			body := "Error: Invalid JSON payload ||| " + fmt.Sprint(err) + " Body Obtained" + "||||" + request.Body
			ApiResponse = events.APIGatewayProxyResponse{Body: body, StatusCode: 500}
			return ApiResponse, nil
		}

		jsonBody.UserEmail = email

		fmt.Println(jsonBody)
		job, msg := CreateJob(&jsonBody)

		if msg != nil {
			fmt.Println("error creating record", msg)
			ApiResponse = events.APIGatewayProxyResponse{Body: "Can not create job", StatusCode: 400}
			return ApiResponse, nil
		}

		resp, err2 := json.Marshal(job)

		if err2 != nil {
			ApiResponse = events.APIGatewayProxyResponse{Body: fmt.Sprint(err), StatusCode: 400}
		} else {
			ApiResponse = events.APIGatewayProxyResponse{Headers: map[string]string{
				"Access-Control-Allow-Origin":  "*",
				"Access-Control-Allow-Methods": "POST,OPTIONS",
				"Access-Control-Allow-Headers": "X-Amz-Date,X-Api-Key,X-Amz-Security-Token,X-Requested-With,X-Auth-Token,Referer,User-Agent,Origin,Content-Type,Authorization,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
			}, Body: string(resp), StatusCode: 200}
		}

		// Response
		return ApiResponse, nil

	case "PUT":
		//validates json and returns error if not working
		//err := fastjson.Validate(request.Body)
		//
		//if err != nil {
		//	body := "Error: Invalid JSON payload ||| " + fmt.Sprint(err) + " Body Obtained" + "||||" + request.Body
		//	ApiResponse = events.APIGatewayProxyResponse{Body: body, StatusCode: 500}
		//	return ApiResponse, nil
		//}

		jsonBody := Job{}

		jsonBody.UserEmail = email

		err := json.Unmarshal([]byte(request.Body), &jsonBody)
		if err != nil {
			body := "Error: Invalid JSON payload ||| " + fmt.Sprint(err) + " Body Obtained" + "||||" + request.Body
			ApiResponse = events.APIGatewayProxyResponse{Body: body, StatusCode: 500}
			return ApiResponse, nil
		}

		//jsonBody.UserEmail = email

		fmt.Println(jsonBody)
		job, msg := UpdateJob(&jsonBody)

		if msg != nil {
			fmt.Println("error updating record", msg)
			ApiResponse = events.APIGatewayProxyResponse{Body: "Can not update job", StatusCode: 400}
			return ApiResponse, nil
		}

		resp, err2 := json.Marshal(job)

		if err2 != nil {
			ApiResponse = events.APIGatewayProxyResponse{Body: fmt.Sprint(err), StatusCode: 400}
		} else {
			ApiResponse = events.APIGatewayProxyResponse{Headers: map[string]string{
				"Access-Control-Allow-Origin":  "*",
				"Access-Control-Allow-Methods": "POST,OPTIONS,GET",
				"Access-Control-Allow-Headers": "X-Amz-Date,X-Api-Key,X-Amz-Security-Token,X-Requested-With,X-Auth-Token,Referer,User-Agent,Origin,Content-Type,Authorization,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
			}, Body: string(resp), StatusCode: 200}
		}

		// Response
		return ApiResponse, nil

	}
	return ApiResponse, nil
}

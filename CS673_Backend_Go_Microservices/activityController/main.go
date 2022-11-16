package main

// Lambda for Activities

import (
	"encoding/json"
	"fmt"
	"github.com/aws/aws-lambda-go/lambda"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"os"

	"github.com/aws/aws-lambda-go/events"
	"github.com/valyala/fastjson"
)

// Decoded JWT

type CreateActivityRequest struct {
	ID          int    `json:"ID"`
	Category    string `json:"category"`
	Description string `json:"description"`
	StartDate   string `json:"start_date"`
	EndDate     string `json:"end_date"`
	Status      string `json:"status"`
	JobId       string `json:"job_id"`
}

type DeleteActivityRequest struct {
	ID int `json:"ID"`
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

func CreateActivity(request *CreateActivityRequest) (Activity, error) {

	db, err := OpenDatabase()

	if err != nil {
		return Activity{}, err
	}

	db.AutoMigrate(&Activity{})
	activity := &Activity{}

	activity.Category = request.Category
	activity.Description = request.Description
	activity.StartDate = request.StartDate
	activity.EndDate = request.EndDate
	activity.Status = request.Status
	activity.JobId = request.JobId

	fmt.Println(activity)

	result := db.Create(activity)

	return *activity, result.Error
}

func UpdateActivity(request *CreateActivityRequest) (Activity, error) {

	db, err := OpenDatabase()

	if err != nil {
		return Activity{}, err
	}

	//db.AutoMigrate(&Activity{})
	activity := &Activity{}

	db.First(&activity, request.ID)

	activity.Category = request.Category
	activity.Description = request.Description
	activity.StartDate = request.StartDate
	activity.EndDate = request.EndDate
	activity.Status = request.Status

	fmt.Println(activity)

	result := db.Save(&activity)
	return *activity, result.Error
}

func GetAllActivities(jobId string) ([]Activity, error) {
	db, err := OpenDatabase()
	if err != nil {
		return []Activity{}, err
	}

	db.AutoMigrate(&Activity{})

	var activities []Activity

	// select all rows from Jobs where email == user email
	db.Where("job_id = ?", jobId).Find(&activities)

	return activities, err
}

func DeleteActivity(id int) error {

	db, err := OpenDatabase()

	if err != nil {
		return err
	}

	// db.AutoMigrate(&Job{})
	activity := &Activity{}

	//job.ID = request.ID
	//job.UserEmail = request.UserEmail
	//job.JobTitle = request.JobTitle
	//job.CompanyName = request.CompanyName
	//job.Description = request.Description
	//job.Status = request.Status

	fmt.Println("deleting Activity")

	err2 := db.Unscoped().Delete(&activity, id)

	if err2.Error != nil {
		fmt.Println(err2)

		return err2.Error
	} else if err2.RowsAffected < 1 {

		return fmt.Errorf("activity with id=%d cannot be deleted because it doesn't exist", id)
	}

	return nil

}

func main() {
	lambda.Start(HandleRequest)
}

func HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	ApiResponse := events.APIGatewayProxyResponse{}

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
		fmt.Println(request.Body)
		var jobId string

		jobId = request.QueryStringParameters["job_id"]

		json.Unmarshal([]byte(request.Body), &jobId)

		activities, err := GetAllActivities(jobId)

		resp, err2 := json.Marshal(activities)

		if err2 != nil {
			ApiResponse = events.APIGatewayProxyResponse{Body: fmt.Sprint(err), StatusCode: 400}
			return ApiResponse, nil
		}

		ApiResponse = events.APIGatewayProxyResponse{Headers: map[string]string{
			"Access-Control-Allow-Origin":  "*",
			"Access-Control-Allow-Methods": "POST,OPTIONS,GET",
			"Access-Control-Allow-Headers": "X-Amz-Date,X-Api-Key,X-Amz-Security-Token,X-Requested-With,X-Auth-Token,Referer,User-Agent,Origin,Content-Type,Authorization,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
		}, Body: string(resp), StatusCode: 200}
		return ApiResponse, nil

		// ... now use the value as needed

	case "PUT":
		//validates json and returns error if not working
		//err := fastjson.Validate(request.Body)
		//
		//if err != nil {
		//	body := "Error: Invalid JSON payload ||| " + fmt.Sprint(err) + " Body Obtained" + "||||" + request.Body
		//	ApiResponse = events.APIGatewayProxyResponse{Body: body, StatusCode: 500}
		//	return ApiResponse, nil
		//}

		jsonBody := CreateActivityRequest{}

		err := json.Unmarshal([]byte(request.Body), &jsonBody)
		if err != nil {
			body := "Error: Invalid JSON payload ||| " + fmt.Sprint(err) + " Body Obtained" + "||||" + request.Body
			ApiResponse = events.APIGatewayProxyResponse{Body: body, StatusCode: 500}
			return ApiResponse, nil
		}

		//jsonBody.UserEmail = email

		fmt.Println(jsonBody)
		activity, msg := UpdateActivity(&jsonBody)

		if msg != nil {
			fmt.Println("error creating record", msg)
			ApiResponse = events.APIGatewayProxyResponse{Body: "Can not create job", StatusCode: 400}
			return ApiResponse, nil
		}

		resp, err2 := json.Marshal(activity)

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

	case "DELETE":

		jsonBody := DeleteActivityRequest{}
		err := json.Unmarshal([]byte(request.Body), &jsonBody)
		if err != nil {
			body := "Error: Invalid JSON payload ||| " + fmt.Sprint(err) + " Body Obtained" + "||||" + request.Body
			ApiResponse = events.APIGatewayProxyResponse{Body: body, StatusCode: 500}
			return ApiResponse, nil
		}

		fmt.Println(jsonBody)

		err2 := DeleteActivity(jsonBody.ID)

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
		}, Body: "Successfully Deleted Activity", StatusCode: 200}

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

		jsonBody := CreateActivityRequest{}
		err = json.Unmarshal([]byte(request.Body), &jsonBody)
		if err != nil {
			body := "Error: Invalid JSON payload ||| " + fmt.Sprint(err) + " Body Obtained" + "||||" + request.Body
			ApiResponse = events.APIGatewayProxyResponse{Body: body, StatusCode: 500}
			return ApiResponse, nil
		}

		//jsonBody.UserEmail = email

		fmt.Println(jsonBody)
		activity, msg := CreateActivity(&jsonBody)

		if msg != nil {
			fmt.Println("error creating record", msg)
			ApiResponse = events.APIGatewayProxyResponse{Body: "Can not create job", StatusCode: 400}
			return ApiResponse, nil
		}

		resp, err2 := json.Marshal(activity)

		if err2 != nil {
			ApiResponse = events.APIGatewayProxyResponse{Body: fmt.Sprint(err), StatusCode: 400}
		} else {
			ApiResponse = events.APIGatewayProxyResponse{Headers: map[string]string{
				"Access-Control-Allow-Origin":  "*",
				"Access-Control-Allow-Methods": "POST,OPTIONS,GET",
				"Access-Control-Allow-Headers": "X-Amz-Date,X-Api-Key,X-Amz-Security-Token,X-Requested-With,X-Auth-Token,Referer,User-Agent,Origin,Content-Type,Authorization,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
			}, Body: string(resp), StatusCode: 200}
		}
	}
	// Response
	return ApiResponse, nil
}

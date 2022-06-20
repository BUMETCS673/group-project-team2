package main

// Lambdas for User

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"os"
	"strings"

	"github.com/aws/aws-lambda-go/lambda"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"github.com/aws/aws-lambda-go/events"
	"github.com/dgrijalva/jwt-go"
	"github.com/valyala/fastjson"
)

type CreateUserRequest struct {
	Email string `json:"email"`
	Name  string `json:"name"`
}

type User struct {
	gorm.Model
	Email string `json:"email" gorm:"uniqueIndex"`
	Name  string `json:"name"`
}

func UserRequest(request *CreateUserRequest) (User, error) {
	username := os.Getenv("db_user")
	password := os.Getenv("db_pass")
	dbName := os.Getenv("db_name")
	dbHost := os.Getenv("db_host")
	dbURI := fmt.Sprintf("host=%s user=%s dbname=%s sslmode=disable password=%s", dbHost, username, dbName, password)
	fmt.Println(dbURI)

	//	db2, err := gorm.Open("postgres", dbURI)
	db2, err := gorm.Open(postgres.Open(dbURI), &gorm.Config{})

	//	defer db2.Close()
	if err != nil {
		return User{}, err
	}
	db2.AutoMigrate(&User{})
	account := &User{}
	account.Email = request.Email
	account.Name = request.Name
	db2.Create(account)
	return *account, nil
}
func main() {
	lambda.Start(HandleRequest)
}

/*
	Getting single user
	Creating user




*/
const SecretKey = "secret"

func ParseJwt(cookie string) {
	claims := jwt.MapClaims{}
	token, err := jwt.ParseWithClaims(cookie, claims, func(token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err != nil || !token.Valid {
		fmt.Printf("xx: %v", err)
		return
	}

	fmt.Printf("got %v claims", len(claims))
	//claims := token.Claims.(*jwt.StandardClaims)
	for key, val := range claims {
		fmt.Printf("Key: %v, value: %v\n", key, val)
	}
	return
}

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

func HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	req, _ := json.Marshal(request)
	fmt.Println(string(req))

	email := GetAuthenticatedEmail(request.Headers["Authorization"])
	fmt.Println("Email", email)

	//fmt.Println(payload, len(payload))

	//for _, val := range payload {
	//	uDec, err := base64.RawURLEncoding.DecodeString(val)
	//	if err != nil {
	//		fmt.Println("Error decoding string: %s ", err.Error())
	//
	//	} else {
	//		fmt.Println(string(uDec))
	//	}
	//}

	ApiResponse := events.APIGatewayProxyResponse{}
	// Switch for identifying the HTTP request
	switch request.HTTPMethod {
	case "GET":
		// Obtain the QueryStringParameter
		name := request.QueryStringParameters["name"]
		if name != "" {
			ApiResponse = events.APIGatewayProxyResponse{Body: "Hey " + name + " welcome! ", StatusCode: 200}
		} else {
			ApiResponse = events.APIGatewayProxyResponse{Body: "Error: Query Parameter name missing", StatusCode: 500}
		}

	case "POST":
		//validates json and returns error if not working
		err := fastjson.Validate(request.Body)

		if err != nil {
			body := "Error: Invalid JSON payload ||| " + fmt.Sprint(err) + " Body Obtained" + "||||" + request.Body
			ApiResponse = events.APIGatewayProxyResponse{Body: body, StatusCode: 500}
		} else {

			//	str := `{"email": "abc@gba.com", "name": "chin"}`

			res := CreateUserRequest{}
			json.Unmarshal([]byte(request.Body), &res)

			user, err := UserRequest(&res)

			if err != nil {
				fmt.Println("error creating record")
			}

			resp, err2 := json.Marshal(user)

			if err2 != nil {
				ApiResponse = events.APIGatewayProxyResponse{Body: fmt.Sprint(err), StatusCode: 400}

			} else {
				ApiResponse = events.APIGatewayProxyResponse{Body: string(resp), StatusCode: 200}

			}

		}

	}
	// Response
	return ApiResponse, nil
}

// func main() {
// 	lambda.Start(HandleRequest)
// }

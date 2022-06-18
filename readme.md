# FollowUp - a Job Tracker Web Application

## Frontend : React + Typescript & Backend : Go & NodeJS Microservices on the Cloud

![Application Architecture](./images/software_arch_overview.png)

## Project Overview

- The Group 2 Project is a Job Tracker Web Application called FollowUp. It is developed with a ReactJS frontend with a NodeJS Backend web server.

- Nowadays, it is not unusual to apply for multiple jobs at a time. However, handling many applications at once can be challenging. FollowUp aims to help job candidates better manage the status and next steps of their applications. The goal is to help them not miss any deadlines, better prepare for the upcoming steps, and, therefore, improve their chances of getting the job offer they desire.

- In order to achieve this goal, FollowUp enables users to keep track of and make changes to the various activities involved in the lifecycle of a job application - such as prep work, phone screens, coding assessments, in-person interviews - to name a few.

- Users can log in to the web application and view the status of their tasks for every job application and this information is pulled from a MySQL Database running on a NodeJS Express Server hosted in the cloud.

- Users can make CRUD operations against the various tasks involved for the job application and these changes are persisted to the backend DB through a REST API Interface.

## Technology Stack

- ReactJS + Typescript for the client Side JS Code
- Go Microservices hosted in the Cloud for the backend
- AWS Lambda and API Gateway to route user requests
- Managed PostgreSQL Database running in the Cloud for user and application data
- Github as the VCS Repository Service
- Github Pages for Hosting SPA

## Instructions for Running Application!

- Followup is extremely simple to use - the application is being hosted on Vercel and the entire backend is live on the Cloud with disaster recovery and scalability mechanisms in place

- A user simply needs to visit the URL where application is hosted

- Or have npm installed on their local machine and follow below steps

- cd into **_CS673_Frontend_TS_React_** folder
- run <code>npm install</code> to install packages
- run <code>npm start</code> to run application
- Once app is running , can use Social Identity Federation through Auth0 to Login
- Only Logged In Users will be able to access App

## Database

- Using a managed PostgreSQL Database running in the Cloud - with automatic scaling enabled in case user load increases significantly

## Security

- Followup uses Auth0 for Social Identity Federation and a RSA 256 Encryption Algorithm on the backend to ensure security

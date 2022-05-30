# Group 2 Project : FollowUp - a Job Tracker Web Application

## Project Overview

- The Group 2 Project is a Job Tracker Web Application called FollowUp. It is developed with a ReactJS frontend with a NodeJS Backend web server. 

- Nowadays, it is not unusual to apply for multiple jobs at a time. However, handling many applications at once can be challenging. FollowUp aims to help job candidates better manage the status and next steps of their applications. The goal is to help them not miss any deadlines, better prepare for the upcoming steps, and, therefore, improve their chances of getting the job offer they desire. 

- In order to achieve this goal, FollowUp enables users to keep track of and make changes to the various activities involved in the lifecycle of a job application - such as prep work, phone screens, coding assessments, in-person interviews - to name a few.

- Users can log in to the web application and view the status of their tasks for every job application and this information is pulled from a MySQL Database running on a NodeJS Express Server hosted in the cloud. 

- Users can make CRUD operations against the various tasks involved for the job application and these changes are persisted to the backend DB through a REST API Interface. 

#Prereq
Setup a database named followup in mysql server
with your own hostname
edit the config/db.config.js to your requirement
USER: "group2",
PASSWORD: "group2",
DB: "followup",

#Setup

To run Migrations please use 

node migration.js up

To run the Nodejs Application please use

node server.js




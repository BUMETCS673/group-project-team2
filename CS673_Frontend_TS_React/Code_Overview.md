<link href="style.css" rel="stylesheet" />

# Code Overview - Job Tracker App

</br>

```
Setting up Project

npx create-react-app jobs-tracker-frontend --template typescript-redux

Dependencies

npm install @auth0/auth0-react @styled-components @types/styled-components

Check out ConstantContact API to get company info about Amazon , etc.
```

</br>
# Backend Overview

<li>Server </li>
</br>

```
Setting up EC2 :

sudo yum -y install curl

curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -

sudo yum install -y nodejs

Installing MySQL :

sudo yum install https://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm
sudo amazon-linux-extras install epel -y
sudo yum -y install mysql-community-server

sudo systemctl enable --now mysqld
systemctl status mysqld

// To reveal temp pw run this
sudo grep 'temporary password' /var/log/mysqld.log
x.q)5ybFjNCH

New pass : Bucs673group2!


Inbound 80 , 443 , 22 open


```

</br>

<li>  Express App </li>

</br>

```
npm install express express-jwt jwks-rsa


app.js :

const express = require("express");

const app = express();

var { expressjwt: jwt } = require("express-jwt");

var jwks = require("jwks-rsa");

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-yrw0t0fy.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://cs673-api-auth0.com",
  issuer: "https://dev-yrw0t0fy.us.auth0.com/",
  algorithms: ["RS256"],
});

// if we want all routes protected from unauthenticated requests
// app.use(jwtCheck);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/authorized", jwtCheck, function (req, res) {
  res.send("Secured Resource");
});

app.get("/authorized/:id", jwtCheck, function (req, res) {
  const id = req.params.id;
  res.send(`your id is ${id}`);
});

app.listen(port);

```

</br>

## Implementing Redux in Jobs App

<li>Test</li>

<li>Test</li>

<li>Test</li>

<li>Test</li>

<li>Test</li>

<li>Test</li>

<li>Test</li>

<li>Test</li>

<li>
Test
</li>

<li>
Test
</li>

</br>

```
Items to work on :

Middleware Wrapper - axios component

Session Handler Component

Models for any entities  - User , Jobs , Activities

```

</br>

</ul>

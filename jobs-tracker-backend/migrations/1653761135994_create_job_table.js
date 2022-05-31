module.exports = {
    "up": "CREATE TABLE jobs (id INT NOT NULL AUTO_INCREMENT, jobTitle TEXT,description TEXT,link TEXT,companyName VARCHAR(50),status VARCHAR(50),userId INT,createdAt DATETIME NOT NULL,updatedAt DATETIME NOT NULL ,PRIMARY KEY (id))",
    "down": "DROP TABLE jobs"
}
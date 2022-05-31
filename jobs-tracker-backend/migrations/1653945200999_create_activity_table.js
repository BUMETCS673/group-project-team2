module.exports = {
    "up": "CREATE TABLE activities (id INT NOT NULL AUTO_INCREMENT, activityType TEXT,description TEXT,jobId INT,startDate DATETIME NOT NULL,endDate DATETIME NOT NULL ,createdAt DATETIME NOT NULL,updatedAt DATETIME NOT NULL ,PRIMARY KEY (id))",
    "down": "DROP TABLE activities"
}
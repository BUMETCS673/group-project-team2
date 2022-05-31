module.exports = {
    "up": "CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT, name TEXT, username TEXT,email TEXT,password VARCHAR(50) ,createdAt DATETIME NOT NULL,PRIMARY KEY (id))",
    "down": "DROP TABLE users"
}
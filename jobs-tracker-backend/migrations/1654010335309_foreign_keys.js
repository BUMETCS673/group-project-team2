module.exports = {
    "up": "ALTER TABLE activities ADD CONSTRAINT fk_job_id FOREIGN KEY (jobId) REFERENCES jobs(id);",
    "down": " ALTER TABLE activities DROP FOREIGN KEY fk_job_id;"
}
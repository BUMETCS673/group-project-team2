const request = require('supertest')
const app = require('../server.js')
describe('User API', () => {
    it('should show all jobs', async () => {
        const res = await request(app).get('/jobs')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('jobs')
    }),
    it('should show a job', async () => {
        const res = await request(app).get('/jobs/3')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('job')
    }),
    it('should create a new job', async () => {
        const res = await request(app)
            .post('/jobs')
            .send({
                firstName: 'Bob',
                lastName: 'Doe',
                email: 'bob@doe.com',
                password: '12345678'
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('job')
    }),
    it('should update a job', async () => {
        const res = await request(app)
            .put('/jobs/3')
            .send({
                firstName: 'Bob',
                lastName: 'Smith',
                email: 'bob@doe.com',
                password: 'abc123'
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('job')
    }),
    it('should delete a job', async () => {
        const res = await request(app)
            .del('/jobs/3')
        expect(res.statusCode).toEqual(204)
    })
})
const request = require('supertest');
const app = require('../server');

describe('API Tests', () => {
    let authToken;

    describe('Auth Endpoints', () => {
        test('POST /api/auth/login - should login with valid credentials', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'admin@nexus.com',
                    password: 'password123'
                });

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('token');
            expect(response.body).toHaveProperty('user');
            expect(response.body.user.email).toBe('admin@nexus.com');

            // Save token for later tests
            authToken = response.body.token;
        });

        test('POST /api/auth/login - should fail with invalid credentials', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'admin@nexus.com',
                    password: 'wrongpassword'
                });

            expect(response.status).toBe(401);
            expect(response.body).toHaveProperty('error');
        });

        test('POST /api/auth/login - should fail with missing fields', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'admin@nexus.com'
                });

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error');
        });

        test('POST /api/auth/register - should register new user', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    name: 'Test User',
                    email: 'test@example.com',
                    password: 'password123'
                });

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('user');
            expect(response.body.user.email).toBe('test@example.com');
        });

        test('GET /api/auth/verify - should verify valid token', async () => {
            // First login to get token
            const loginResponse = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'admin@nexus.com',
                    password: 'password123'
                });

            const token = loginResponse.body.token;

            const response = await request(app)
                .get('/api/auth/verify')
                .set('Authorization', `Bearer ${token}`);

            expect(response.status).toBe(200);
            expect(response.body.valid).toBe(true);
        });
    });

    describe('Stats Endpoints', () => {
        beforeAll(async () => {
            // Login to get token
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'admin@nexus.com',
                    password: 'password123'
                });
            authToken = response.body.token;
        });

        test('GET /api/stats - should return stats with valid token', async () => {
            const response = await request(app)
                .get('/api/stats')
                .set('Authorization', `Bearer ${authToken}`);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('totalUsers');
            expect(response.body).toHaveProperty('totalRevenue');
            expect(response.body).toHaveProperty('totalOrders');
        });

        test('GET /api/stats - should fail without token', async () => {
            const response = await request(app)
                .get('/api/stats');

            expect(response.status).toBe(401);
            expect(response.body).toHaveProperty('error');
        });

        test('GET /api/stats/chart - should return chart data with valid token', async () => {
            const response = await request(app)
                .get('/api/stats/chart')
                .set('Authorization', `Bearer ${authToken}`);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('labels');
            expect(response.body).toHaveProperty('datasets');
            expect(Array.isArray(response.body.labels)).toBe(true);
        });

        test('GET /api/stats/recent - should return recent activities', async () => {
            const response = await request(app)
                .get('/api/stats/recent')
                .set('Authorization', `Bearer ${authToken}`);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('activities');
            expect(Array.isArray(response.body.activities)).toBe(true);
        });
    });

    describe('Server Endpoints', () => {
        test('GET / - should return API info', async () => {
            const response = await request(app).get('/');

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message');
            expect(response.body).toHaveProperty('version');
        });

        test('GET /nonexistent - should return 404', async () => {
            const response = await request(app).get('/nonexistent');

            expect(response.status).toBe(404);
            expect(response.body).toHaveProperty('error');
        });
    });
});

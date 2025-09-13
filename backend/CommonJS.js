const request = require('supertest');
const app = require('../server');

describe('API Root', () => {
  it('returns welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Welcome to Smart Mart Art Project Management API');
  });
});
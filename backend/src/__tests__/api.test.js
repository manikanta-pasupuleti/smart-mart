import request from 'supertest';
import app from '../index.js';

describe('API Endpoints', () => {
  it('should return 200 for /api/projects', async () => {
    const res = await request(app).get('/api/projects');
    expect(res.statusCode).toBe(200);
  });
});

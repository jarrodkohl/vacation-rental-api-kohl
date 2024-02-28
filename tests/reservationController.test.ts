import request from 'supertest';
import app from '../src/app'
import { Server } from 'http'
let server: Server;

beforeAll(() => {
  const PORT = 3000;
  server = app.listen(PORT);
});

afterAll((done) => {
  server.close(done);
});


describe('POST /reservations', () => {
  // Existing test for successful reservation creation
  it('should create a reservation', async () => {
    const res = await request(app)
      .post('/reservations')
      .send({
        homeId: 1,
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  // Test for overlapping reservations
  it('should reject an overlapping reservation', async () => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(new Date().getDate() + 1));

    // First, create a reservation
    await request(app)
      .post('/reservations')
      .send({ homeId: 1, startDate, endDate });

    // Try to create an overlapping reservation for the same home
    const res = await request(app)
      .post('/reservations')
      .send({ homeId: 1, startDate, endDate });
    expect(res.statusCode).toEqual(400);
  });

  // Test for reservation with a non-existent home ID
  it('should return an error for a non-existent home', async () => {
    const res = await request(app)
      .post('/reservations')
      .send({
        homeId: 999, 
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      });
    expect(res.statusCode).toEqual(404);
  });

  // Test for reservation with an invalid date range (end date before start date)
  it('should reject a reservation with an invalid date range', async () => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(new Date().getDate() - 1)); 

    const res = await request(app)
      .post('/reservations')
      .send({ homeId: 1, startDate, endDate });
    expect(res.statusCode).toEqual(400);
  });
});

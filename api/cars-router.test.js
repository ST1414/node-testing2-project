// Write a minimum of ten tests using supertest.
const request = require('supertest')
const server = require('./server');
const Car = require('./cars-model');
const db = require('../data/dbConfig');

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
})
beforeEach(async () => {
    await db.seed.run();
})
afterAll(async () => {
    await db.destroy();
})


describe('car tests - general', () => {
    it('is the correct env', () => {
        expect(process.env.NODE_ENV).toBe('testing')
    })
});


describe('[GET] /api/cars', () => {
    let res;
    beforeEach(async () => {
        res = await request(server).get('/api/cars')
    })

    it('responds with status 200', async () => {
        expect(res.status).toBe(200);
    })
    it('responds with all cars', async () => {
        expect(res.body).toHaveLength(4);
    })
    
})

describe('[GET] /api/cars/:id', () => {
    let res;
    let id = 1;
    beforeEach(async ()=> {
        res = await request(server).get(`/api/cars/${id}`)
    })

    it('responds with status 200', async () => {
        expect(res.status).toBe(200);
    })
    it(`responds with car at id ${id} `, async () => {
        expect(res.body).toMatchObject({ car_id: id, make: 'Subaru', model: 'Forester', year: 2016 });
    })
    
})

describe('car tests - post by id', () => {
    let res;
    let newCar = { make: 'Datsun', model: '510', year: 1975 }
    beforeEach(async ()=> {
        res = await request(server).post(`/api/cars`).send(newCar);
    })

    it
    
})

/*
// Get all - value
// Get all - status

ID - status
ID - single obj
ID - correct

POST 
- status, response ... add successful
- status, response ... add with error
- status, 

it('is the correct env', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})
describe('hobbits router', () => {
  describe('[GET] /hobbits', () => {
    let res
    beforeEach(async () => {
      res = await request(server).get('/hobbits')
    })
    it('responds with 200 OK', async () => {
      expect(res.status).toBe(200)
    })
    it('responds with all hobbits', async () => {
      expect(res.body).toHaveLength(4)
    })
  })
  describe('[POST] /hobbits', () => {
    let res
    beforeEach(async () => {
      res = await request(server)
        .post('/hobbits/')
        .send({ name: 'gabe' })
    })
    it('responds with a 210 created', async () => {
      expect(res.status).toBe(201)
    })
    it('responds with new hobbit', async () => {
      expect(res.body).toMatchObject({ id: 5, name: 'gabe' })
    })
    it('responds with da new (snapshot)', () => {
      expect(res.body).toMatchSnapshot()
    })
  })
})
*/
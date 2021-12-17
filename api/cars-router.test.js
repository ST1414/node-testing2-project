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

describe('[POST] /api/cars - Create New Car', () => {
    let res;
    let newCar = { make: 'Datsun', model: '510', year: 1975 }
    beforeEach(async ()=> {
        res = await request(server).post('/api/cars').send(newCar);
    })

    it('new car created, responds w. status 201', async () => {
        expect(res.status).toBe(200);
    })
    it('new car created, returns w. created car', async () => {
        expect(res.body).toMatchObject(newCar);
    })
    it('new car created, car is in the database', async () => {
        const actual = await db('cars').where('model', '510').first();
        const expected = newCar;
        expect(actual).toMatchObject(expected);
    })    
})

describe('[POST] /api/cars - Do NOT New Car', () => {
    let res;
    let carNoMake = { model: 'Mustang', year: 1968};
    let carNoModel = { make: 'Ford', year: 1968};
    let carNoYear = { make: 'Ford', model: 'Mustang'};
    beforeEach(async ()=> {
        resNoMake = await request(server).post(`/api/cars`).send(carNoMake);
        resNoModel = await request(server).post(`/api/cars`).send(carNoModel);
        resNoYear = await request(server).post(`/api/cars`).send(carNoYear);
    })
    it('car without MAKE not created, responds with error 500', async () => {
        expect(resNoMake.status).toBe(500);
    })
    it('car without MODEL not created, responds with error 500', async () => {
        expect(resNoModel.status).toBe(500);
    })
    it('car without YEAR not created, responds with error 500', async () => {
        expect(resNoYear.status).toBe(500);
    })

    it('car without MAKE not created, car not in database', async () => {
        const actual = await db('cars').where('model', carNoMake.model).first();
        expect(actual).toBe(undefined);
    })
    
})

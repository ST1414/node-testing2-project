const db = require('../data/dbConfig');

const getAll = async () => {
    return await db('cars');
}
const getById = async (id) => {
    return await db('cars').where('car_id', id).first();
}
const create = async (car) => {
    const newCarId = await db('cars').insert(car)
    return getById(newCarId);
}
const findBy = async (filter) => {
    return await db('cars').where(filter);
}


module.exports = {
    getAll,
    getById,
    create,
    findBy,
}
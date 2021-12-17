const express = require('express');
const router = express.Router();
const Car = require('./cars-model');

// --------- Routes ---------
router.get('/', (req, res, next) => {
    Car.getAll()
        .then( response => {
            res.json(response)
        })
        .catch(next);   
})

router.get('/:id', (req, res, next) => {
    Car.getById(req.params.id)
        .then( response => {
            res.json(response);
        })
        .catch(next);   
})

router.post('/', (req, res, next) => {
    Car.create(req.body)
        .then( response => {
            res.json(response);
        })
        .catch(next);
})

module.exports = router;
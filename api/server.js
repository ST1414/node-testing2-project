const express = require("express")
const carsRouter = require("./cars-router")

const server = express();
server.use(express.json());
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.send('<h1>Hooray!  You found us!</h1>');
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
});

module.exports = server;

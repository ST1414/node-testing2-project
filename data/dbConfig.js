// // Used the knexfile and the environment to set a connection to the database

// // Bring in the knex library
// const knex = require('knex');

// // Bring in the knex config files
// const config = require('../knexfile');

// // to create a connection to the db, need to know what environment we're in
// const environment = process.env.NODE_ENV || 'development'


// module.exports = knex(config[environment]);


const knex = require("knex");

const config = require("../knexfile.js");

const environment = process.env.NODE_ENV || "development";

module.exports = knex(config[environment]);
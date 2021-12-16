# Server Testing Module Project

## Instructions

### Minimum Viable Product

For this project you will create a RESTful API using Node and Express, containing endpoints to perform some CRUD operations on a resource of your choosing. Two or three endpoints are enough. Data should be persisted in a SQLite database.

## Requirements

- Write a minimum of ten tests using supertest.

## Checklist

Here is a checklist of tasks to help you put your project together:

- Generate a `.gitignore` file. -- npx gitignore node 

- Install express, knex, sqlite3 as plain dependencies.
    * npm i express
    * npm i -g knex
        * npm i knex
        * knex init
    * npm i sqlite3

- Install jest, eslint, nodemon, supertest, cross-env as dev-dependencies.
    * npm i -D jest @types/jest supertest cross-env
        * npx jest --init
    * npx eslint --init  <<<<< IS THIS RIGHT?
        * Add "jest":true to eslintrc.json under "env"
    * npm i -D nodemon

- Configure jest and eslint using `npx <libname> --init`.
    * done above
    * done above

- Create a `knexfile.js` with "development" and "testing" configurations.
    * done above

- Create a `db-config.js` file that selects the correct configuration using the value of `process.env.NODE_ENV`.

- Create migration and seed files.
    * npx knex migrate:make fav-cars (NOTE: not the table or db name, just the migrate file name)
    * npx knex seed:make 1-make-cars (Seeds the db tables created in migrate Up and Down)

- Put together "start", "server", "rollback", "migrate" and "seed" scripts in your `package.json`.



- Create a "test" script in your `package.json` using cross-env to inject a `NODE_ENV` of "testing".






- Create a basic express application with a few database access functions and a few endpoints.

- Test your endpoints manually using Postman, HTTPie or similar.

- Test your endpoints with supertest.


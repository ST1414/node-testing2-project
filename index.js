// 4.3.4 - TESTING BACK END PROJECT
// Thu. Dec. 16, 2021

// Before, we had to test our end points with Postman or HTTPie
// to find errors and debug them.  Supertest automates that!!!

const server = require('./api/server');
const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log(`\n*** Server is listening on Port ${PORT} ***`)
})
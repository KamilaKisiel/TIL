const http = require('http')

// const server = http.createServer(() => {
//     console.log('I hear you! thanks for the request')
// })

// server.listen(3000); //then on terminal run `node server.js`- 
//it is going to look like it's hanging in there, but if you open localhost:3000
//and go back to the terminal you'll see 'I hear you! thanks for the request'

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Hellloooo</h1>')
})

server.listen(3000);
const http = require('http')

// const server = http.createServer(() => {
//     console.log('I hear you! thanks for the request')
// })

// server.listen(3000); //then on terminal run `node server.js`- 
//it is going to look like it's hanging in there, but if you open localhost:3000
//and go back to the terminal you'll see 'I hear you! thanks for the request'

const server = http.createServer((request, response) => {
    console.log('headers', request.headers)
    console.log('method', request.method)
    console.log('url', request.url)
    const user = {
        name: 'John',
        hobby: 'Skating'
    }
    
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
})

server.listen(3000);
const http = require('http')

const server = http.createServer(() => {
    console.log('I hear you! thanks for the request')
})

server.listen(3000); //then on terminal run `node server.js`- 
//it is going to look like it's hanging in there, but if you open localhost:3000
//and go back to the terminal you'll see 'I hear you! thanks for the request'


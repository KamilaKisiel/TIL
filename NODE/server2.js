const express = require('express')

const app = express();

app.use((req, res, next) => {
    console.log('<h1>hello</h1>') //middleware to work properly need to call for the third parameter 'next'
    next();
})

app.get('/', (req, res) => {
    res.send("tested")
})
app.listen(3000);
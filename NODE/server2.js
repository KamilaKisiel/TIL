const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.get('/', (req, res) => {
    //console.log(req.query); //than type in localhost:3000/?name=Kamila&age=34, and nodemon gives us { name: 'Kamila', age: '34' }
    req.body//by using middleware bodyParser we can receive everything tha we want in a request body
    res.send("getting root")
});


app.listen(3000);
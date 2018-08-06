const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.get('/:id', (req, res) => {
    //console.log(req.query); //than type in localhost:3000/?name=Kamila&age=34, and nodemon gives us { name: 'Kamila', age: '34' }
    //req.body//by using middleware bodyParser we can receive everything tha we want in a request body
    //console.log(req.header);//by get method we can send json within headers
    //console.log(req.params); //sending param afetr slash - localhost:3000/1234 gives in nodemon { id: '1234' }

    res.status(404).send("not found")
});


app.listen(3000);
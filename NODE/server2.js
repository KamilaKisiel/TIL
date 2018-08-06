const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(express.static(__dirname + '/public'))
// if we wont to sent static file like html we need to use above syntax
// /public is the name of the folder where html is saved
// accordingly css and js file added to html will upload automatically 

app.listen(3000);
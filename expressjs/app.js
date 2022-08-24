const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = 80;

// for serving static files
app.use('/static/', express.static('static'))
// app.use(express.bodyParser());

// set the template engine as pug
app.set('view engine', 'pug');

// set pug views directory
app.set('views', path.join(__dirname, 'views'));

// create application/json parser
// var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

// pug learn endpoint
app.get('/', (req, res) => {
    res.status(200).render('learn.pug',{title: 'Learn' , message: 'Hello there this is pug'});
});


// custom backend
app.get('/', (req, res) => {
    res.status(200).send("hello this is get message");
});

app.post('/',urlencodedParser, (req, res) => {
    let name = req.body.name
    res.status(200).render('page2.pug',{title : 'learn',message : `hello ${name} this is post message`});
});

app.listen(port,()=>{
    console.log(`the application is started on port ${port}`);
});
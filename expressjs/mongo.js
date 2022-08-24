const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path');
const app = express();
const port = 80;
mongoose.connect('mongodb://localhost/learn',{useNewUrlParser: true, useUnifiedTopology: true});

app.use('/static/', express.static('static'))
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.get('/', (req, res) => {
    res.status(200).render('learn.pug',{title: 'Learn' , message: 'Hello there this is pug'});
});

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', (err) => {
console.log('we are now connected');
});

var Schema = new mongoose.Schema({
    name: String,
    age: String
});

var document = mongoose.model('mycollect',Schema);

app.post('/',urlencodedParser, (req, res) => {
   let mydata = new document(req.body);
   mydata.save().then(() => {
       res.send("data updated successfully in database")
   }).catch(() => {
       res.status(400).send("data updation failed")
   });
   console.log("database elements are");
   document.find(function(err, response){
        response.forEach(element => {
            console.log(element.name);
            console.log(element.age);
        })
    });
});
 
// mydata.save(function(err, document){
//     if(err)
//     res.render('show_message', {message: "Database error", type: "error"});
//     else
//     res.render('show_message', {
//         message: "New person added", type: "success", person: personInfo});
// });

// document.findOneAndRemove({name: "Ayush"});
// document.find(function(err, response){
//     res.json(response);
// });

app.listen(port,()=>{
    console.log(`the application is started on port ${port}`);
});
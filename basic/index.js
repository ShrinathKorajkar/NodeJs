// import { readFileSync, writeFileSync, readFile } from 'fs';
const fs = require('fs');

// synchronous or blocking
let text = fs.readFileSync("hello.txt", "utf8");
text = text.replace("test", "hello");

console.log("content of file is : ");
console.log(text);

fs.writeFileSync("neweHello.txt", text);

// Asynchronous or non-blocking
text = fs.readFile("hello.txt", "utf8", (err, text) => {
    console.log(err,text);
});
console.log("hello");




// importing modules
const mod = require('./mod');
console.log(mod.avg([2,3]));




const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync("home.html");
const about = fs.readFileSync("about.html");

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about.html'){
        res.end(about);
    }
    else {
        res.statusCode = 404;
        res.end("not found");
    }
})

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});
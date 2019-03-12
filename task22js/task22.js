const express = require('express');
var app = express();
var path = require('path');

function myDog(name, age, type, breed){
   this.name = name;
   this.age = age;
   this.type = type;
   this.breed = breed;
}

var data = new myDog("Silke", 1, "dog", "Finnish Lapphund")

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname + '/info.html'))
   });

   app.get('/pictures', (req, res) => {
    res.sendFile(path.join(__dirname + '/pictures.html'))
   });

   app.get('/SlideHandler.js',(req, res) => {
    res.sendFile(path.join(__dirname + '/SlideHandler.js'))
   });

app.get('/data', (req, res) => {
   res.json(data)
  });

   app.use('/images',express.static(__dirname + '/images'))
   app.use('/style',express.static(__dirname + '/style'))

app.listen(process.env.PORT || 8080)
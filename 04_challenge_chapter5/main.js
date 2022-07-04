const path = require('path')
const express = require('express')
const app = express()
const port = 8000

// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/tampilangame', function(req, res){
    res.sendFile(path.join(__dirname + '/public/tampilangame.html'))
})

// app.set('view engine','ejs')


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
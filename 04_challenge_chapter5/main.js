const path = require('path')
const express = require('express')
const userRouter = require('./users/users.logic');
const app = express()
const port = 8000


// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 

app.use(express.json());

app.use(express.static(__dirname + '/public'))

app.use(userRouter);

app.get('/', function(req, res){
   return res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/tampilangame', function(req, res){
    return res.sendFile(path.join(__dirname + '/public/tampilangame.html'))
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))

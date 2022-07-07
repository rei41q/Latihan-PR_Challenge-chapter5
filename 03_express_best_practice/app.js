const express = require('express')
const app = express()
const port = 9000

// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 

app.get('/ping' , (req , res)=>{

   return res.send('pong')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
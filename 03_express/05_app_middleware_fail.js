const express = require('express')
const morgan = require('morgan')
const { isNativeError } = require('util/types')
const app = express()
const port = 8005

app.use(morgan("tiny"))

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.get("/error", function(req, res){
    throw new Error("error proses")
})

app.use((err, req, res, next)=>{
    return res.status(500).json({
        message: err.message,
        status: 500,
    })
})

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
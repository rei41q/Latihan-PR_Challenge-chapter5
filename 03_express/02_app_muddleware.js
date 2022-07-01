const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 8002;

// const logger = (req, res, next) =>{
//     const kunci = req.headers["x-secret-key"];
//     if(kunci!=='katarahasia'){
//         return res.status(400).send("your are not authorized")
//     }
//     console.log("middleware into => ",req.method, "-",req.url)
//     next();
// }

app.use(morgan('tiny'));

app.get('/', (req , res)=>{
    res.send("hi there from binar")
})
app.get('/secret', morgan('tiny'),(req , res)=>{
    res.send("hi there from binar secret")
})

app.listen(port, () =>
    console.log("server is up and running on port " + port)
)
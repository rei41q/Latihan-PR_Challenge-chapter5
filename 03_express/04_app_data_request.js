const express = require("express");
const app = express();
const port = 8004;

app.use(express.json());

app.get('/', (req , res)=>{
    res.send("hi there from binar")
})

app.post("/users",(req, res) =>{
    console.log(req.query);
    console.log(req.body);
    return res.send("ok");
})

app.listen(port, () =>
    console.log("server is up and running on port " + port)
)
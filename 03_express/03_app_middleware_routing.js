const express = require("express");
const morgan = require("morgan");
const productRouter = require("./products/products.route");
const userRouter = require("./users/users.route");
const app = express();
const port = 8003;

app.use(morgan("tiny"));
app.use(userRouter);
app.use(productRouter);

app.get('/', (req , res)=>{
    res.send("hi there from binar")
})

app.listen(port, () =>
    console.log("server is up and running on port " + port)
)
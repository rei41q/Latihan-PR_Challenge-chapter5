const express = require("express");
const app = express();

const port = 8000;

app.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.headers);
  console.log(req.body);
  return res.status(200).send("Selamat datang di binar FSW");
});

app.get("/products", (req, res) => {
  const katalog = [
    {
      name: "Product 1",
      price: 2000,
    },
    {
      name: "Product 2",
      price: 4000,
    },
  ];
  return res.json(katalog);
});

app.get("/products/:productId", (req, res) => {
  console.log(req.parans);
  return res.send("your product id is => " + req.params.productId);
});

app.listen(port, () =>
  console.log("Server Started and listen on port " + port)
);

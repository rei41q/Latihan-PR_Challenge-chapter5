const express = require("express");
const { 
  getProduct,
  getUsers, 
  createUsers, 
  readUsers, 
  updateUsers,
  deleteUsers, 
} = require("./users/users.service");
const app = express();
const port = 8000;  

// domain user management

// get users

app.get("/users", getUsers);

// create user

app.get("/products", getProduct);

app.post("/users", createUsers);

// get spesific user by id

app.get("/users/:userId", readUsers);
// aplikasi user management

// get users

app.put("/users/:userId", updateUsers);

// update user

// delete user

app.delete("/users/:userId", deleteUsers);

// domain product

// domain payment

app.listen(port, () =>
  console.log("Server Started and listen on port " + port)
);
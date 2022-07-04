const path = require('path')
const express = require('express')
const app = express()
const port = 8000
const { 
    userList,
    getUsers, 
    createUsers, 
    readUsers, 
    updateUsers,
    deleteUsers, 
  } = require("./users/users.service");

// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 

app.use(express.json());


app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
   return res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/tampilangame', function(req, res){
    return res.sendFile(path.join(__dirname + '/public/tampilangame.html'))
})

app.post('/login', (req,res)=> { // LOGIN
    const index = req.params.userID-1;
    let nama;
    let password;
    let id;
    id =  req.body['id'];
    nama =  req.body['nama'];
    password = req.body['password'];
    for(let i = 0 ; i<userList.length ; i++){
        if(userList[i].id == id && userList[i].nama == nama && userList[i].password == password){
               return res.send("berhasil login")
        }
    }
    return res.send("gagal login, username/password salah")
  })

app.post('/users/daftarakun', function(req, res, next) { //DAFTAR AKUN
    const id = userList.length + 1 ;
    const user = req.body['nama'];
    const pass = req.body['password'];
    userList.push({"id": id, "nama" : user, "password": pass})
    return res.send("berhasil daftar akun")
  });

  app.get('/login/list', (req,res)=> { // LIST SEMUA YG SDH DIDAFTARKAN
    return res.json(userList);
  })

  app.get("/users/:userID", (req,res) =>{ //GET 1 USER BERDASARKAN ID 1,2,3,4...
    const index = req.params.userID;
    return res.json(userList[index-1]);
});
  
// app.put("/Users/:userID", (req,res) =>{ //UPDATE USER BERDASARKAN ID 1,2,3,4...
    // const index = req.params.userID-1;
    // userList[index].nama =  req.body['nama'];
    // userList[index].password = req.body['password'];
    // return res.send("berhasil update nama dan password")
// });

app.delete('/Users/:userID',(req, res) =>{ //DELETE USER BERDASARKAN ID 1,2,3,4...
    const index = req.params.userID-1;
    console.log(index);
    userList.splice(index, 1);
    res.send("akun dihapus");
  });
// app.set('view engine','ejs')


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))

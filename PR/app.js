const express = require("express");
const app = express();
const port = 8007;
const userList = [];
const userId = 0;
app.use(express.json());

app.get('/', (req , res)=>{
    res.send("hi there from binar")
})

app.post('/users/daftarakun', function(req, res, next) { //DAFTAR AKUN
    const id = userList.length + 1 ;
    const user = req.body['nama'];
    const pass = req.body['password'];
    userList.push({"id": id, "nama" : user, "password": pass})
    res.send("berhasil daftar akun")
  });

  app.get('/users/list', (req,res)=> { // LIST SEMUA YG SDH DIDAFTARKAN
    res.json(userList);
  })

  app.get("/users/:userID", (req,res) =>{ //GET 1 USER BERDASARKAN ID 1,2,3,4...
    const index = req.params.userID;
    res.json(userList[index-1]);
});
  
app.put("/updateUsers/:userID", (req,res) =>{ //UPDATE USER BERDASARKAN ID 1,2,3,4...
    const index = req.params.userID-1;
    userList[index].nama =  req.body['nama'];
    userList[index].password = req.body['password'];
    res.send("berhasil update nama dan password")
});

app.delete('/deleteUsers/:userID',(req, res) =>{ //DELETE USER BERDASARKAN ID 1,2,3,4...
    const index = req.params.userID-1;
    console.log(index);
    userList.splice(index, 1);
    res.send("akun dihapus");
  });
//dapat 1 user

// app.get("/users/:id",(req, res)=>{
//     return res.userList;
// })
app.listen(port, () =>
    console.log("server is up and running on port " + port)
)
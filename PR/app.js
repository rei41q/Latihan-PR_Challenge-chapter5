const express = require("express");
const app = express();
const port = 8007;
const userList = [{
   id: "1",
   nama: "greiq",
   password: "12345"
},{
  id: "2",
  nama: "greiq 2",
  password: "12345"
}
,{
  id: "3",
  nama: "greiq 3",
  password: "12345"
}];
const userId = 0;
app.use(express.json());

app.get('/', (req , res)=>{
    return res.send("hi there from binar")
})

app.post('/users/daftarakun', function(req, res, next) { //DAFTAR AKUN
    const id = userList.length + 1 ;
    const user = req.body['nama'];
    const pass = req.body['password'];
    userList.push({"id": id, "nama" : user, "password": pass})
    return res.send("berhasil daftar akun")
  });

  app.get('/users/list', (req,res)=> { // LIST SEMUA YG SDH DIDAFTARKAN
    return res.json(userList);
  })

  app.get("/users/:userID", (req,res) =>{ //GET 1 USER BERDASARKAN ID 1,2,3,4...
    const index = req.params.userID;
    return res.json(userList[index-1]);
});
  
app.put("/Users/:userID", (req,res) =>{ //UPDATE USER BERDASARKAN ID 1,2,3,4...
    const index = req.params.userID-1;
    userList[index].nama =  req.body['nama'];
    userList[index].password = req.body['password'];
    return res.send("berhasil update nama dan password")
});

app.delete('/Users/:userID',(req, res) =>{ //DELETE USER BERDASARKAN ID 1,2,3,4...
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
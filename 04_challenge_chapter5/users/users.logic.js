const express = require('express');
const { userList, getUsers, createUsers, readUsers, updateUsers, deleteUsers } = require('./users.data');
const userRouter = express.Router();

userRouter.use(express.json());

userRouter.post('/login', (req,res)=> { // LOGIN
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

// userRouter.post('/users/daftarakun', function(req, res, next) { //DAFTAR AKUN
//     const id = userList.length + 1 ;
//     const user = req.body['nama'];
//     const pass = req.body['password'];
//     userList.push({"id": id, "nama" : user, "password": pass})
//     return res.send("berhasil daftar akun")
//   });

  userRouter.get('/login/list', (req,res)=> { // LIST SEMUA YG SDH DIDAFTARKAN
    return res.json(userList);
  })

//   userRouter.get("/users/:userID", (req,res) =>{ //GET 1 USER BERDASARKAN ID 1,2,3,4...
//     const index = req.params.userID;
//     return res.json(userList[index-1]);
// });
  
// userRouter.put("/Users/:userID", (req,res) =>{ //UPDATE USER BERDASARKAN ID 1,2,3,4...
    // const index = req.params.userID-1;
    // userList[index].nama =  req.body['nama'];
    // userList[index].password = req.body['password'];
    // return res.send("berhasil update nama dan password")
// });

userRouter.delete('/Users/:userID',(req, res) =>{ //DELETE USER BERDASARKAN ID 1,2,3,4...
    const index = req.params.userID-1;
    console.log(index);
    userList.splice(index, 1);
    res.send("akun dihapus");
  });
// userRouter.set('view engine','ejs')


module.exports = userRouter;
// const usersCollection = [
//    
    
// }];
const userList = [{ //DATA USER YG SUDAH ADA
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
const getUsers = (req, res) =>{
    return res.send(userList);
};
const createUsers = (req, res) =>{
    return res.send('Create users');
};
const readUsers = (req, res) =>{
    return res.send('read users');
};
const updateUsers = (req, res) =>{
    return res.send('update users');
};
const deleteUsers = (req, res) =>{
    return res.send('Delete users');
};
module.exports = {userList,getUsers, createUsers, readUsers, updateUsers, deleteUsers};
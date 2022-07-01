// const usersCollection = [
//    
    
// }];
const usersCollection = [
    {
                idUser: {
                id:"IdUser",
                nama: "nama user",
                password: "paswword user",
            }
        }
];
const getUsers = (req, res) =>{
    return res.send(usersCollection);
};
const createUsers = (req, res) =>{
    // const userId = 1;
    // const user = {
    //     id: userId,
    //     nama: "username",
    //     password: "password",
    // }
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
module.exports = {getUsers, createUsers, readUsers, updateUsers, deleteUsers};
// const usersCollection = [
//    
    
// }];
const productCollection = [
    {
        Idproduct:{
            Id:"id product",
            namaProduct:"Fanta",
        }
    }
]
const getProduct = (req, res) =>{
    return res.send(productCollection);
};
module.exports = {getProduct};
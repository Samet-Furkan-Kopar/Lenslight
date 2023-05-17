import user from "../models/userModel.js"
import jwt from "jsonwebtoken"
const authenticationToken = async(req,res,next)=> {
try {
    const authHeader = req.headers["authorization"];
const token = authHeader && authHeader.split(" ")[1]//eğer authheader varsa -aradaki boşluğa göre arraya çevirir ve 1. kısmı alır(arada bir boşluk olduğundan 0. ve 1. indisler var 1. kısım yani "barear jnffjnjnajfjk" bareardan sonrası yani token kısmı lazım)
 if (!token) {
   return res.status(401).json({
    succeded:false,
    error:"no token available",
   })
 } 
req.user = await user.findById(
    jwt.verify(token, process.env.JWT_SECRET).userId//createToken metodunda userId verdik tokenı oluşturan bileşenler arasında userId de var buna ulaşıp authorization işlemlerini yapıcaz
);
next();//bir sonraki işleme geç anlamında
} catch (error) {
    res.status(401).json({
        succeded:false,
        error:"not Authorized"
    })
}

};
export {authenticationToken};
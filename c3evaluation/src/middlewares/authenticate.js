
var jwt = require('jsonwebtoken');
require('dotenv').config()
const verifytoken=(token)=>{
   return new Promise((resolve,reject)=>{
    jwt.verify(token, process.env.secretkey, function(err, decoded) {
      if(err){
          return reject(err)
      }
       return resolve(decoded)
      });
   })
}


const authenticate=async(req,res,next)=>{
    if(!req.headers.authorization)
    return res.status(400).send("Authorisation failed or incorrect token")

    if(!req.headers.authorization.startsWith("Bearer "))
    return res.status(400).send("Authorisation failed or incorrect token")
    const token=req.headers.authorization.split(" ")[1]
    let decoded;

    try {
        decoded=await verifytoken(token)
    } catch (error) {
        return res.status(400).send("Authorisation failed or incorrect token")
    }

    req.user=decoded.user
    return next()
}

module.exports=authenticate
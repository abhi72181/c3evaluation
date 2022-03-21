
const User=require("../models/user.model")
const jwt = require('jsonwebtoken')
require('dotenv').config()
const newToken=(user)=>{
    return jwt.sign({ user }, process.env.secretkey)
    
}

const register=async(req,res)=>{
    try {
        
        let user=await User.findOne({email:req.body.email})
         
        if(user){
            return res.status(400).send("Email already present")
        }
        
            user=await User.create(req.body)

           const token=newToken(user)
            return res.status(200).send({user,token})
        
       
    } catch (error) {
        return res.status(400).send({message:error.message})
    }
}

const login=async(req,res)=>{
    try {
       const user=await User.findOne({email:req.body.email})
       if(!user){
        return res.status(400).send("wrong email or password")
       }
       const match=user.checkPassword(req.body.password)
       if(!match){
        return res.status(400).send("wrong email or password")
       }
       const token=newToken(user)
       return res.status(200).send({user,token})
       
    } catch (error) {
        return res.status(400).send({message:error.message})
    }
}

module.exports={register,login}
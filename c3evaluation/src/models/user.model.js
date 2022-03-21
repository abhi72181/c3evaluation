// const { type } = require("express/lib/response")
const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:false},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    profileImages:{type:String}
},{
    timestamps:true,
    versionkey:false
})

const User=mongoose.model("user",userSchema)
module.exports=User
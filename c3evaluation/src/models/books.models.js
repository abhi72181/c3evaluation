// const { type } = require("express/lib/response")
const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    likes:{type:Number,default:0},
   coverImage:{type:String,required:true},
    content:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    publicationId:{type:mongoose.Schema.Types.ObjectId,ref:"publication",required:true}
  
},{
   timestamps:true,
    versionkey:false
})

const Books=mongoose.model("book",bookSchema)
module.exports=Books
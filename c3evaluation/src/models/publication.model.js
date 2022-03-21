// const { type } = require("express/lib/response")
const mongoose=require("mongoose")

const publicationSchema=mongoose.Schema({
  name:{type:String,required:true}
  
},{ 
    timestamps:true,
 versionkey:false
})
const Publication=mongoose.model("publication",publicationSchema)
module.exports=Publication
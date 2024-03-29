const mongoose=require('mongoose')
const DocumentSchema= new mongoose.Schema({
    UserId:String,
    title:String,
    description:String
})
const DocumentModel=mongoose.model("documents",DocumentSchema)
module.exports=DocumentModel
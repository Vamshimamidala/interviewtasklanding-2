let mongoose=require("mongoose")
let formSchema= new mongoose.Schema({
   name:{
       type:String,
       requied:true
   },
    
   email:{
       type:String,
       requied:true
   },
   phone:{
       type:Number,
       requied:true
   },
   description:{
       type:String,
       require:true
   }
})   
module.exports= mongoose.model("form",formSchema)
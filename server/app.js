let express=require("express");
 
require("./dbcoonection/dbconne")
 
let cors=require("cors");
const formRouting = require("./router.js/formRouting");
 
let app=express();
app.use(express.json());
app.use(cors())
app.use("/form",formRouting)
 
 
app.listen(4000,()=>{
    console.log("server started")
})
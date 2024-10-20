const express = require("express");
let Form = require("../Modal.js/formModal");

let formRouting = express.Router()

formRouting.post("",async(req,res)=>{
    let form = new Form(req.body);
    let result = await form.save();
    res.send(result)
})
formRouting.get("", async(req,res)=>{
    let form = await Form.find();
    res.send(form)
})
 

module.exports=formRouting;
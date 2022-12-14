const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
{
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true
    }
},{timestamps:true}  //timestamps will give exact time when category was created
);

module.exports=mongoose.model("Category",categorySchema)
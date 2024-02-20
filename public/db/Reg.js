const mongoose= require("mongoose");

const RegSchema= new mongoose.Schema({
    FirstName: String,
    LastName: String,
    email:String,
    Password:Number
});

const Registration= new mongoose.model("Registration", RegSchema);

module.exports=Registration;
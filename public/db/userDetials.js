const mongoose= require("mongoose");

const UserDetialsSchema= new mongoose.Schema({
    FullName: String,
    About:String,
    Company:String,
    Job:String,
    Country:String,
    Address:String,
    Phone:Number,
    email:String,
    TwitterProfile:String,
    FacebookProfile:String,
    InstagramProfile:String,
    LinkedinProfile:String,
});

const UserDetials= new mongoose.model("UserDetials", UserDetialsSchema);

module.exports=UserDetials;
const mongoose= require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Logindata").then(()=>{
    console.log("connection  successfully")
}).catch((Error)=>{
console.log(Error)
})
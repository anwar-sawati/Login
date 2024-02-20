const mongoose = require("mongoose")
// mongoose.connect("mongodb://127.0.0.1:27017/Logindata").then(()=>{
//     console.log("connection successfully")
// }).catch((error)=>{
//     console.log(error)
// })

const loginschema=new mongoose.Schema({
    email:{
        type:String
              },
    Password:Number
});
// const RegSchema= new mongoose.Schema({
//     FirstName: String,
//     LastName: String,
//     email:String,
//     Password:Number
// });






const loginModel= new mongoose.model("login", loginschema);



// store data into the database.....................................
// const logindocuments= async()=>{
     
//     const logininfo= new login({
//         UserName:"Anwar khan",
//         Password:123434
//      } )
//      const result= await logininfo.save();
//      console.log(result)
// }
// logindocuments();

module.exports=loginModel;

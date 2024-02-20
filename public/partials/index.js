
// Express

const express= require("express");
const app= express();
const path = require("path");
const ejs= require("ejs")
const connection= require("../db/connection")
const loginModel = require("../db/login");
const Registration   = require("../db/Reg")
const bodyParser=require("body-parser")
 //require("./db")
 //bodyParser = require("body-parser")
 
//const templatePath=path.join(__dirname, '../public/templates/views')
//const templatePath= path.join(__dirname, "../views")

//...................................
const templatePath= path.join(__dirname,  "../Templates/views")
console.log(templatePath)
// templates engine


app.set("view engine", "ejs")
app.set("views",templatePath)
//hbs.registerPartials(partialpath);


app.use(express.json())
app.use(express.urlencoded({ extended:false }));

 




 app.get("/login", (req,res)=>{
   res.render("login")
 });

 app.get("/Registration",(req, res)=>{
  res.render("Registration")
 });

 



 app.post("/login", async(req, res)=>{

  try {
    const email = req.body.email;
const Password = req.body.Password
console.log(email)
console.log(Password)
   const useremail= await Registration.findOne({email:email})
   console.log(useremail)
   if(!useremail){
   return res.send("user not found")

   }
   if(useremail.Password===parseInt(Password)){
    res.render("web")
    //res.send("wellcome")

   }
   else{
    res.send("wrong user")
   }
   
    
    
  } catch (error) {
    console.log(error)
  }
})
  //   const user=new login(req.body)
  //   user.save().then(()=>{
  //     console.log(user)
  //   }).catch((error)=> console.log(error))
  //  console.log(user)

// const data={
//    email:req.body.email,
//    Password:req.body.password,
     
// }


// const userdata= await loginModel.insertMany(data)
// console.log(userdata)

// email=req.body.email
// password=req.body.Password



// for Registration...............................................

app.post("/Registration", async(req, res)=>{
const Regdata={

  FirstName :req.body.FirstName,
  LastName:req.body.LastName,
  email:req.body.email,
   Password:req.body.Password,
}
  
  const RegUser= await Registration.insertMany(Regdata)
  console.log(RegUser)
  res.send(RegUser)

// email=req.body.email
// Password=req.body.Password

//    const useremail= await Registration.findOne({email:email})
//    console.log(useremail)

//    if(useremail.Password==(Password)){
//     res.send("wellcome")
//    }
//    else{
//     res.send("wrong user")
//    }
   
       })


  



   






 app.listen(3000, ()=>{
    console.log("listening to  the port no 8000")
 })


 
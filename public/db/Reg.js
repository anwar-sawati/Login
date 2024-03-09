const mongoose= require("mongoose");
const bcrypt= require("bcrypt")


const RegSchema= new mongoose.Schema({
    FirstName: String,
    LastName: String,
    email:String,
    Password:Number
});

RegSchema.pre("save", async function(next){
    this.Password= await bcrypt.hash(this.Password, 10)
    console.log(`the current password${thi.Password}`)

    // const hash= await bcrypt.hash(Password, 10)
    // console.log(`the current password${hash}`)
    next(this.Password);
})

const Registration= new mongoose.model("Registration", RegSchema);

module.exports=Registration;
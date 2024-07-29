const mongoose=require("mongoose")
const userSchema=mongoose.Schema(
    {
        name:{type:String,required:true},
        phoneno:{type:String,required:true},
        emailid:{type:String,required:true},
        password:{type:String,required:true}
    }
)

var usermodel=mongoose.model("users",userSchema)
module.exports=usermodel
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const usermodel=require("./models/users")

let app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://shanibatm17:shaniba17tm@cluster0.h4a3e.mongodb.net/blogappdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/signup",async(req,res)=>{
    let input=req.body
    let hashedPassword=bcrypt.hashSync(req.body.password,10)
    console.log(hashedPassword)
    req.body.password=hashedPassword
    console.log(input)

    let check=usermodel.find({emailid:req.body.emailid})
    
        if (check.length>0) {
            res.json({"status":"emailid already exist"})
        } else {
            let result=new usermodel(input)
            await result.save()
            res.json({"status":"success"})

        }
})

app.listen(3030,()=>{
    console.log("server started")
})


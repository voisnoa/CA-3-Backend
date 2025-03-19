const express = require('express')
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const model = require("./schema")

dotenv.config()
const app = express()

PORT = 8808

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(
        console.log('MONGO is running')
    )

app.post("/login" , async (req,res) =>{

    try{
        const {email , password} = req.body
    
        if (!email){
            res.send(() =>{
                "Email cannot be empty."
            });
        
        }
        if(!password){
            res.send(() =>{
                "Password cannot be empty."
            })
        }

        res.status(201).json({message : "User is successfully logged in"})
    }
    
    catch{
        res.status(404).json({message: "Email or password cannot be empty"})
    }
})

app.listen(PORT , console.log(`Website is running on http://localhost:${PORT}`))



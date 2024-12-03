import express from "express"

const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',async (req,res)=>{
    res.status(500).send("Hello User");
});

const port=8800
app.listen(port,()=>console.log("Server is running in port:",port))



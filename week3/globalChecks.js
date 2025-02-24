const express = require("express");
const app = express();
app.use(express.json());

app.post("/",(req,res)=>{
    const kidney = req.body.kidneys;
    const kidneylength = kidney.length;
    res.send("you have "+ kidneylength +" kidneys")
})


// global catches if there is some error in the input

app.use((err,req,res,next)=>{
    res.json({
        msg:"something is up with the server"
    })
})
app.listen(3000);
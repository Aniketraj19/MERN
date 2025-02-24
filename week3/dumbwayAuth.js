const express = require("express");
const app = express();

app.get("/healthcheckups",(req,res)=>{
    const kidneyID = parseInt(req.query.id);
    const username = req.headers.username;
    const password = req.headers.password;

    if(username !="aniket" || password!="aniket123")
    {
        res.status(403).json({
            msg:"authentication failed"
        })
        return;
    }

    if(kidneyID !=1 && kidneyID !=2)
    {
        res.status(411).json({
            msg:"not human"
        })
        return; 
    }
    res.send("hello guys")
})

app.listen(3000);
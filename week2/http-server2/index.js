const express = require("express");
const port = 3000;
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/",function(req,res){
    res.send("hello word");
})

app.post("/config",function(req,res){
    let vari = req.body;

    res.send(vari + "hello sir how are you");
})
app.listen(port);
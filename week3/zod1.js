const express = require("express");
const app = express();
app.use(express.json());
const zod = require("zod");

const schema = zod.array(zod.number);

app.post("/",(req,res)=>{
    const kidney = req.body.kidneys;
    const response = schema.safeParse(kidney);

    res.send({
        response
    })

})

app.listen(3000);
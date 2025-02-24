const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  const principle = parseInt(req.query.principle);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);

  const answer = (principle * rate * time) / 100;
  console.log(answer);
  res.send(answer.toString());
});

app.listen(3000);

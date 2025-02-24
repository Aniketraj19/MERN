const express = require("express");
const app = express();

let counter = 0;
function calculateRequests(req,res,next)
{
    counter++;
    next();
}

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "aniket" || password != "aniket123") {
    res.status(403).json({
      msg: "authentication failed",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyID = parseInt(req.query.id);
  if (kidneyID != 1 && kidneyID != 2) {
    res.status(411).json({
      msg: "not human",
    });
  } else {
    next();
  }
}
app.get("/health-checkups",userMiddleware,kidneyMiddleware,calculateRequests, (req, res) => {
  res.send("Health is ok");
});
app.get("/kidney-checkups",userMiddleware,kidneyMiddleware,calculateRequests, (req, res) => {
  res.send("kidney is okay");
});
app.get("/heart-checkups",userMiddleware,calculateRequests, (req, res) => {
  res.send("heart is okay");
});


app.get("")

app.listen(3000);

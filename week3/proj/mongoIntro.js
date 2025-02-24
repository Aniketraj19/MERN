const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://aniketraj19verma:Bm1R6aGA9AkAC2dw@cluster0.vikfe.mongodb.net/User"
);

const User = mongoose.model("User", {
  name: String,
  password: String,
  email: String,
});

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    res.status(404).json({
      msg: "User already exists",
    });
    return;
  }
  const users = new User({
    name: name,
    password: password,
    email: email,
  });

  users.save();
  res.json("user has been added");
});

app.listen(3000);

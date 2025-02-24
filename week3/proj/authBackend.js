const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  if (
    ALL_USERS.find(
      (users) => users.username == username && users.password == password
    )
  ) {
    return true;
  } else {
    return false;
  }
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    res.status(404).send("user not found");
  } else {
    var token = jwt.sign({ username: username }, jwtPassword);
    res.json({
      token,
    });
  }
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    const dArray = ALL_USERS;

    // ugly way to show users except the logged in user
    // for (let i = 0; i < dArray.length; i++) {
    //   if (username == dArray[i].username) {
    //     dArray.splice(i, 1);
    //     break;
    //   }
    // }
    // res.status(200).json({
    //   dArray,
    // });

    // better way is to use filter
    const response = ALL_USERS.filter(function (n) {
      if (n.username == username) {
        return false;
      } else {
        return true;
      }
    });

    res.status(200).json({
      response,
    });
  } catch (err) {
    res.status(404).json({
      msg: "unaurthorized access",
    });
  }
});

app.listen(3000);

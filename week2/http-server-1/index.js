const express = require("express"); // this initalizes the express framework that lets us create the backend server
const app = express() // this express function returns the app object that is used to acess the post get put delete methods
const port = 3000

app.get('/',function(req,res){
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Web Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>Welcome to My Website</h1>
        <p>A simple webpage with HTML & CSS</p>
    </header>

    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    <section>
        <h2>About This Page</h2>
        <p>This is a simple webpage designed with **HTML** and **CSS**. It includes a header, navigation bar, and content section.</p>
        <button>Click Me</button>
    </section>

    <footer>
        <p>&copy; 2025 Sample Web Page. All Rights Reserved.</p>
    </footer>

</body>
</html>
`)
})

app.post('/conversations', function(req, res){
    console.log(req.headers)
  res.send({
    msg: "2 + 2 = 4"
  })
})

app.listen(port)

//create a todo app on server that saves the todos on server
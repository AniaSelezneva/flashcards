const express = require("express");

const app = express();

// /-location parameter
app.get("/", (req, res) => {
    res.send("<h1>Kukish</h1>");
});

app.get("/hello", (req, res) => {
    res.send("<h1>Pupsiki are here</h1>");
});

app.listen(3000, () => {
    console.log("The application is running on localhost:3000!");
});
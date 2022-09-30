const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//SECTION Home route
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send("The result of the calculation is: " + result);

});

//SECTION Route for BMI calculator
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);

    let bmi = weight / Math.sqrt(height);

    res.send("You BMI is " + bmi);
});

//SECTION Where to spin up the server
app.listen(3000, function () {
    console.log("Server started on port 3000");
});
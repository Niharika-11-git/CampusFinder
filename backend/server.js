const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("CampusFinder Backend Running");
});

app.post("/register", (req, res) => {

    const { name, email, password } = req.body;

    console.log("===== NEW USER =====");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    res.json({
        success: true,
        message: "Registration Successful"
    });

});
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    console.log("===== LOGIN =====");
    console.log("Email:", email);
    console.log("Password:", password);

    res.json({
        success: true,
        message: "Login Successful"
    });

});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
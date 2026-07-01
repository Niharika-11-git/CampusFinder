require("dotenv").config();
const User = require("./models/User");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Register Route
app.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save();

        res.json({
            success: true,
            message: "User Registered Successfully"
        });

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: "Registration Failed"
        });

    }

});

// Login Route
app.get("/", (req, res) => {
    res.send("Backend Working");
});
app.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;
        console.log("LOGIN REQUEST RECEIVED");
        console.log(email);
        console.log(password);

        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                success: false,
                message: "User Not Found"
            });
        }

        if (user.password !== password) {
            return res.json({
                success: false,
                message: "Wrong Password"
            });
        }

        res.json({
    success: true,
    message: "Login Successful",
    name: user.name,
    email: user.email
});
    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: "Login Failed"
        });

    }

});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});
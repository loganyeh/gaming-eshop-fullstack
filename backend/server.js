import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://loganyehdev_db_user:3AegTqokMycV0KP0@cluster0.cetpm2m.mongodb.net/?appName=Cluster0")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(`Error: ${err}`));

app.get("/", (req, res) => {
    res.json({
        message: "Server is running...",
    });
});
 
// testing git 

app.listen(3000, () => {
    console.log("Server is running on Port 3000");
});


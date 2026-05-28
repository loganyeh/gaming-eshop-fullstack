import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Wishlist from "./models/Wishlist";

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

app.get("/wishlist", async(req, res) => {
    const games = await Game.find();
    res.json(games);
});

app.post("/wishlist", async(req, res) => {
    const wishlistItem = await Wishlist.create({
        game: req.body.game,
    });

    res.json({
        message: "New game added to the wishlist",
        data: wishlistItem,
    });
});

app.listen(3000, () => {
    console.log("Server is running on Port 3000");
});


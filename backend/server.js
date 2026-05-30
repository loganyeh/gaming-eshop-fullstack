console.log("🔥 SERVER STARTED");

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Wishlist from "./models/Wishlist.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(`Error: ${err}`));

app.get("/", (req, res) => {
    res.json({
        message: "Server is running...",
    });
});

app.get("/wishlist", async(req, res) => {
    const wishlist = await Wishlist.find();
    res.json(wishlist);
});

app.get("/wishlist/:gameID", async(req, res) => {
    const wishlistItem = await Wishlist.findOne({
        gameID: req.params.gameID,
    });

    res.json(wishlistItem);
});

app.post("/wishlist", async (req, res) => {
    console.log("🔥 HIT POST /wishlist");
    console.log("BODY:", req.body);
    try {
        // console.log("REQ BODY:", req.body);

        const wishlistItem = await Wishlist.create({
            gameID: req.body.gameID,
            name: req.body.name,
            background_image: req.body.background_image,
        });

        res.json({
            message: `${wishlistItem.name} has been added to the wishlist`,
            data: wishlistItem,
        });
    } catch (err) {
        console.error("POST /wishlist error:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

app.delete("/wishlist/:id", async (req, res) => {
    const deletedGame = await Wishlist.findByIdAndDelete(req.params.id);

    if(!deletedGame) {
        return res.status(404).json({
            message: "Game not found",
        });
    };

    res.json({
        message: "Game Deleted",
        data: deletedGame,
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});


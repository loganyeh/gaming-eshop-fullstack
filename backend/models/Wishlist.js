import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    gameID: Number,
    name: String,
    background_image: String,
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
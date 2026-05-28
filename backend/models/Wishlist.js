import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    gameID: Number,
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
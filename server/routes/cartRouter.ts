import express from "express";
import { addToCart, clearCart, deleteCartItem, getCart, updateCartItem } from "../controllers/cartController.js";
import { protect } from "../middleware/auth.js";


const cartRouter = express.Router();

cartRouter.get("/", protect, getCart);
cartRouter.post("/add", protect, addToCart);
cartRouter.put("/item/:productId", protect, updateCartItem);
cartRouter.delete("/item/:productId", protect, deleteCartItem);
cartRouter.delete("/", protect, clearCart);

export default cartRouter;

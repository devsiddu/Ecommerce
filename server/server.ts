import "dotenv/config";
import express, { Request, Response } from 'express';
import cors from "cors";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import { clerkWebhook } from "./controllers/webhook.js";
import makeAdmin from "./scripts/makeAdmin.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRouter.js";
const app = express();

// connect to db
await connectDB();

// clerk middleware
app.use(clerkMiddleware());

// Middleware
app.use(cors())
app.use(express.json());


app.post("/api/clerk", express.raw({ type: "application/json" }), clerkWebhook)

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

// make admin
await makeAdmin();

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
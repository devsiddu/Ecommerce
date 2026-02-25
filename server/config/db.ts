import mongoose from "mongoose";

export const connectDB = async () => {

    const MONGODB_URI = process.env.MONGODB_URI as string;

    if (!MONGODB_URI) {
        throw new Error("Missing mongo bd url in env file ");
    }
    try {
        mongoose.connection.on('connected', () => console.log("DB Connected"));
        await mongoose.connect(MONGODB_URI);
    } catch (error) {
        console.error("Failed to connect mongo db :" + error);
        throw error;
    }
}
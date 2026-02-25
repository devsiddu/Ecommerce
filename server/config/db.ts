import mongoose from "mongoose";

export const connectDB = async () => {

    const MONGODB_URI = process.env.MONGODB_URI as string;

    if (!MONGODB_URI) {
        throw new Error("Missing mongo bd url in env file ");
    }
    try {
        mongoose.connection.on('connected', () => console.log("DB Connected"));
        await mongoose.connect(process.env.MONGODB_URI as string);
    } catch (error) {
        console.log("Failed to connect mongo db :" + error);
    }
}
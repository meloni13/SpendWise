import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = process.env.MONGODB_URL;

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}
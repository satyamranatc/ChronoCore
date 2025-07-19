import mongoose from "mongoose";
import "dotenv/config"

export default function ConnectDB()
{
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log(err))
}
import mongoose from "mongoose";
import "dotenv/config";

const url = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected");
    return connect;
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;

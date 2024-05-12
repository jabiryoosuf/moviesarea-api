import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MNGODBURL);
    console.log("mongodb connected successfully");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
export default connectDb;

import mongoose from "mongoose";

let connectDB = async () => {
  try {
    await mongoose.connect(process.env.db_URL);
    console.log("connected to DB !");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;

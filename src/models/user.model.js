import timespan from "jsonwebtoken/lib/timespan";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  timestamp: true,
});

export default User = mongoose.model("user", userSchema);

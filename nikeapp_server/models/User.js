import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      min: 3,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    phoneNumber: {
      type: String,
      require: true,
      unique: true,
      max: 11,
    },
    address: {
      type: String,
      require: true,
    },
    cart: [Object],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;

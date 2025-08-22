import { model, Schema } from "mongoose";

const userSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: [true, "firstname is required"],
  },
  lastname: {
    type: String,
    trim: true,
    required: [true, "lastname is required"],
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false,
    minLength: [5, "Password must be at least 5 characters"],
  },
});
const User = model("User", userSchema);
export default User;

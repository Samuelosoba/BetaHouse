import createHttpError from "http-errors";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { generateAccessToken } from "../config/generateToken.js";

export const registerUser = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    if (!firstname || !lastname || !email || !password) {
      return next(createHttpError(400, "all fields are required"));
    }
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return next(createHttpError(400, "email already exists"));
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    const accessToken = generateAccessToken(user._id);
    //send a response to the client
   res.status(201).json({
     success: true,
     message: "Account created successfully",
     accessToken,
     user: {
       firstname: user.firstname,
       lastname: user.lastname,
       email: user.email,
       _id: user._id,
     },
   });

  } catch (error) {
    next(error);
  }
};
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // 1. Validate input
    if (!email || !password) {
      return next(createHttpError(400, "Email and password are required"));
    }

    // 2. Check if user exists
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(createHttpError(400, "Invalid email or password"));
    }

    // 3. Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(createHttpError(400, "Invalid email or password"));
    }

    // 4. Generate token
    const accessToken = generateAccessToken(user._id);

    // 5. Respond
  res.status(200).json({
    success: true,
    message: "Login successful",
    accessToken,
    user: {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      _id: user._id,
    },
  });

  } catch (error) {
    next(error);
  }
};
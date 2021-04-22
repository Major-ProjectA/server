import User from "../models/User-models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const { userName, email, passwordHash, confirmPassword } = req.body;

    if (!userName || !email || !passwordHash || !confirmPassword)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    if (passwordHash.length < 6)
      return res.status(400).json({
        errorMessage: "Please enter a password of at least 6 characters.",
      });

    if (passwordHash !== confirmPassword)
      return res.status(400).json({
        errorMessage: "Please enter the same password twice.",
      });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        errorMessage: "An account with this email already exists.",
      });

    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(passwordHash, salt);

    const newUser = new User({
      userName,
      email,
      password,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .status(201)
      .json({
        Message: "Sign up successfull.",
        user: savedUser.toObject({ getters: true }),
      });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, passwordHash } = req.body;

    if (!email || !passwordHash)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const passwordCorrect = await bcrypt.compare(
      passwordHash,
      existingUser.password
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });
    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .status(202)
      .json({
        Message: "Sign in successfull.",
        user: existingUser.toObject({ getters: true }),
      });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

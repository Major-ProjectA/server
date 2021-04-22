import User from "../models/User-models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const { userName, email, passwordHash, confirmPassword } = req.body;
    if (!userName || !email || !passwordHash || !confirmPassword)
      return res.status(404).json({ errorMessage: "Please enter all required fields." });
    if (passwordHash.length < 6)
      return res.status(404).json({ errorMessage: "Please enter a password of at least 6 characters." });
    if (passwordHash !== confirmPassword)
      return res.status(404).json({ errorMessage: "Please enter the same password twice." });
    
    let existingUser; 
    try {
      existingUser = await User.findOne({email: email})
    } catch (error) {
      res.status(404).json({ errorMessage: "Something went wrong, please try again." });
    }
  
    if(existingUser){
      res.status(404).json({ errorMessage: "Email is existed, please try again with another email." });
    }
  
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(passwordHash, salt);

    const createdUser = new User({
      userName,
      email,
      password
    })
  
    try {
      await createdUser.save();
      const token = jwt.sign(
        {
          user: createdUser._id,
        },
        process.env.JWT_SECRET
      );
  
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send();
    
      res.status(201).json ({
        user: createdUser.toObject ({
          getters:true
        })
      });
    } catch (error) {
      res.status(404).json({ errorMessage: "" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};
  
export const login = async (req, res, next) => {

    const { email, passwordHash } = req.body;
    if(!email || !passwordHash)
      return res.status(404).json({ errorMessage: "Please enter all required fields." });

    const existingUser = await User.findOne({ email: email });
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const passwordCorrect = await bcrypt.compare(
      passwordHash,
      existingUser.password
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const token = jwt.sign ({
      user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    if(!existingUser || existingUser.passwordCorrect !== passwordpasswordCorrect)
    {
      res.status(404).json({ message: "Email or Password is wrong, please try again." });
    }
    res.json({message: 'Signed in successfull.', user: existingUser.toObject({getters:true})});
  
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    }).send();

};
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generatejwt from "../utility/generate-jwt.js";
export const signup = async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      password,
      confirmedPassword,
      gender
    } = req.body;
    console.log(req.body);
    if (
      !name ||
      !email ||
      !password ||
      !confirmedPassword ||
      !gender
    ) {
      return res.status(400).send({ message: "All fields are required" });
    }

    if (password != confirmedPassword) {
      return res
        .status(401)
        .send({ message: "Password and Confirmed password doesn't match" });
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .send({
          message:
            "Invalid email format. Must be in the format 'name@gmail.com'",
        });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(401).send({ message: "User Already Exists" });
    }
    const passwordHash = await bcrypt.hash(password, 10);

    let newuser;
    
    
    newuser = await new User({
    name,
    email,
    phoneNumber,
    password: passwordHash,
    gender,
    }).save();
    

    generatejwt(newuser._id, res);
    res.status(200).json({
      _id: newuser._id,
      name: newuser.name,
      email: newuser.email,
      phoneNumber: newuser.phoneNumber,
      gender: newuser.gender,
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal server error", error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "Invalid email or password" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).send({ message: "Invalid email or password" });
    }

    generatejwt(user._id, res); 

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      gender: user.gender,
    });
  } catch (err) {
    res.status(500).send({ message: "Internal server error", error: err.message });
  }
};
export const logout = async (req, res) => {
//   verifyRoute
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).send({ message: "logout successfully" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error:Interval Server Error", error: err.message });
  }
};
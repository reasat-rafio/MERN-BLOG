const User = require("../models/User-model");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "rafios secret", { expiresIn: maxAge });
};

module.exports.user_login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({
      user,
      token,
    });
  } catch (err) {
    res.status(200).json({
      msg: "User already Exist",
    });
  }
};

module.exports.user_signup_post = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    const token = createToken(user._id);
    res.status(200).json({
      user,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      msg: "User already Exist",
    });
  }
};

module.exports.find_user_get = (req, res) => {};

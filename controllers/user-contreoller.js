const axios = require("axios");

const setJwt = (value) => {
  localStorage.setItem("jwt", value);
  return localStorage.getItem("jwt");
};

// !
module.exports.user_login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      "http://localhost:1337/auth/local",
      {
        identifier: email,
        password,
      },
      config
    );

    // ? Setting and getting the jwt token to localStorage
    const jwt = setJwt(response.data.jwt);

    // ? Setting the userId and username to localStorage
    localStorage.setItem("user_id", response.data.user._id);

    // ? Sending the response if the request succeed
    res.status(200).json({
      data: response.data.user,
      jwt,
    });
  } catch (err) {
    // ? Sending the response if the request failed
    res.status(400).json({
      msg: "Your email or password is invalid.",
    });
  }
};

// !
module.exports.user_signup_post = async (req, res) => {
  const { username, email, password } = req.body;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(
      "http://localhost:1337/auth/local/register",
      {
        username,
        email,
        password,
      },
      config
    );

    // ? Setting and getting the jwt token to localStorage
    const jwt = setJwt(response.data.jwt);

    // ? Setting the userId to localStorage
    localStorage.setItem("user_id", response.data.user._id);

    // ? Sending the response
    res.status(200).json({
      data: response.data.user,
      jwt,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "User already exist",
    });
  }
};

module.exports.find_user_get = (req, res) => {};

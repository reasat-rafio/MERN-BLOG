const router = require("express").Router();
const {
  user_login_post,
  user_signup_post,
  find_user_get,
} = require("../controllers/user-contreoller");

// ~POST     /auth/signup
// ? @decs     signup a new user
router.post("/signup", user_signup_post);

// ~PUT     /auth/login
// ? @decs     login a user
router.post("/login", user_login_post);

// ~GET     /auth/user/:id
// ? @decs      get the current user
router.get("/get/:id", find_user_get);

module.exports = router;

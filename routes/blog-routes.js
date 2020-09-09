const router = require("express").Router();
const {
  blog_get,
  blog_post,
  blog_edit,
  blog_delete,
  FindOneBlog_get,
} = require("../controllers/blog.controller");

// ~GET     /blog/get
// ? @decs      getting the blogs from the server
router.get("/get", blog_get);

// ~GET     /blog/get/:id
// ? @decs      getting one blog from the server
router.get("/get/:id", FindOneBlog_get);

// ~POST     /blog/post
// ? @decs     posting a new blog
router.post("/post", blog_post);

// ~PUT     /blog/edit/:id
// ? @decs      editing an existing blog
router.put("/edit/:id", blog_edit);

// ~DELETE     /blog/delete/:id
// ? @decs       deleting an existing blog
router.delete("/delete/:id", blog_delete);

module.exports = router;

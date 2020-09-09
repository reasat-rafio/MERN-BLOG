const User = require("../models/blog-models");

module.exports.blog_get = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {}
};

module.exports.FindOneBlog_get = async (req, res) => {
  try {
    const user = await User.findById({
      _id: req.params.id,
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(501).json({
      msg: "failed to post",
    });
  }
};

module.exports.blog_post = async (req, res) => {
  const { title, body } = req.body;
  try {
    const user = await User.create({
      title,
      body,
    });
    res.status(201).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "failed to post",
    });
  }
};

module.exports.blog_edit = async (req, res) => {
  try {
    const editUser = await User.findById({ _id: req.params.id });
    res.status(200).json(editUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "failed to post",
    });
  }
};

module.exports.blog_delete = async (req, res) => {
  try {
    const deleteUSer = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteUSer);
  } catch (err) {}
  console.log(err);
  res.status(500).json({
    msg: "failed to post",
  });
};

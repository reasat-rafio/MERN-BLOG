const axios = require("axios");

// ~ Getting userId and jwt from localStorage

module.exports.blog_get = async (req, res) => {
  try {
    const token = localStorage.getItem("jwt");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get("http://localhost:1337/blogs", config);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(501).json({
      msg: "failed to Get",
    });
  }
};

module.exports.FindOneBlog_get = async (req, res) => {
  const url = req.url;
  const id = url.slice(5, url.length);

  try {
    const token = localStorage.getItem("jwt");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `http://localhost:1337/blogs/${id}`,
      config
    );
    res.status(200).json(response.data);
    console.log(response);
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
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("jwt");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      "http://localhost:1337/blogs",
      {
        title,
        descriptions: body,
        user: userId,
      },
      config
    );

    res.status(201).json(response.data);
  } catch (err) {
    res.status(500).json({
      msg: "failed to post",
    });
  }
};

module.exports.blog_edit = async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    res.status(500).json({
      msg: "failed to post",
    });
  }
};

module.exports.blog_delete = async (req, res) => {
  const url = req.url;
  const id = url.slice(8, url.length);

  try {
    const token = localStorage.getItem("jwt");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(
      `http://localhost:1337/blogs/${id}`,
      config
    );
    res.status(200).json(response.data);
    console.log(response);
  } catch (err) {
    console.log(err);
    res.status(501).json({
      msg: "failed to delete",
    });
  }
};

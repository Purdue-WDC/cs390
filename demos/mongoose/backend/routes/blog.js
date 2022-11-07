import express from "express";

import {BlogModel} from "../schema/blog.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const blogs = await BlogModel.find({});
  return res.send(blogs.map((blog) => blog.toObject()));
});

router.post("/create-post", async (req, res) => {
  const body = req.body;
  const blog = new BlogModel({content: body.content, title: body.title});
  await blog.save();
  return res.send(blog.toObject());
});

export default router;

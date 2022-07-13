const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const Category = require("../categories/Category");
const Article = require("./Article");

router.get("/admin/articles", (req, res) => {
  res.render("admin/articles");
});

router.get("/admin/articles/new", (req, res) => {
  Category.findAll().then((categories) => {
    res.render("admin/articles/new", { categories: categories });
  });
});

router.post("/articles/save", (req, res) => {
  var title = req.body.title;
  var category = req.body.category;
  var body = req.body.body;

  Article.create({
    title: title,
    slug: slugify(title),
    body: body,
    categoryId: category,
  }).then(() => {
    res.redirect("/admin/articles");
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const Category = require("./Category");

router.get("/admin/categories/new", (req, res) => {
  res.render("admin/categories/new");
});

router.post("/categories/save", (req, res) => {
  var title = req.body.title;

  if (!isNaN(title)) {
    //não é um número
    res.redirect("/admin/categories/new");
  } else if (title === undefined) {
    // indefinido
    res.redirect("/admin/categories/new");
  } else {
    Category.create({
      title: title,
      slug: slugify(title),
    })
      .then(() => {
        res.redirect("/");
      })
      .catch(() => {
        res.redirect("admin/categories/new");
      });
  }
});

module.exports = router;

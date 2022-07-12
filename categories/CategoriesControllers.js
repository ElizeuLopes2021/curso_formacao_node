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
        res.redirect("/admin/categories");
      })
      .catch(() => {
        res.redirect("admin/categories/new");
      });
  }
});

router.get("/admin/categories", (req, res) => {
  //buscando todas as categorias no banco de dados.
  Category.findAll().then((categories) => {
    res.render("admin/categories", {
      categories: categories,
    });
  });
});

router.post("/categories/delete", (req, res) => {
  var id = req.body.id;

  //se undefined ou não é um numero.
  if (id === undefined || isNaN(id)) {
    res.redirect("/admin/categories");
  } else {
    //deletando uma categoria.
    Category.destroy({ where: { id: id } }).then(() => {
      res.redirect("/admin/categories");
    });
  }
});

router.get("/admin/categories/edit/:id", (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.redirect("/admin/categories");
  } else {
    Category.findByPk(id)
      .then((category) => {
        if (category != undefined) {
          res.render("admin/categories/edit", {
            category: category,
          });
        } else {
          res.redirect("/admin/categories");
        }
      })
      .catch(() => {
        res.redirect("/admin/categories");
      });
  }
});

router.post("/categories/update", (req, res) => {
  var id = req.body.id;
  var title = req.body.title;

  Category.update(
    //atualizando o titulo pelo id da categoria
    { title: title, slug: slugify(title) },
    {
      where: { id: id },
    }
  ).then(() => {
    res.redirect("/admin/categories");
  });
});

module.exports = router;

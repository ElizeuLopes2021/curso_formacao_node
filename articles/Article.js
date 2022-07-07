const connection = require("../database/database");
const Sequelize = require("sequelize");
const Category = require("../categories/Category");

const Article = connection.define("articles", {
  title: {
    type: Sequelize.STRING,
    alowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    alowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    alowNull: false,
  },
});

Category.hasMany(Article); //um para muitos.
Article.belongsTo(Category); //um para um

// Article.sync({ force: true });// atualizando banco de dados

module.exports = Article;

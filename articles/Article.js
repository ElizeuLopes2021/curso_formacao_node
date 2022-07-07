const connection = require("../database/database");
const Sequelize = require("sequelize");

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

module.exports = Article;

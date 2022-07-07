const connection = require("../database/database");
const Sequelize = require("sequelize");

const Category = connection.define("categories", {
  title: {
    type: Sequelize.STRING,
    alowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    alowNull: false,
  },
});

// Category.sync({ force: true });// atualizando banco de dados

module.exports = Category;

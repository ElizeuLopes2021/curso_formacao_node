let connection,
  { Sequelize } = require("../database/database");

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

module.exports = Category;

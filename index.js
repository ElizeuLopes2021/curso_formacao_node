const express = require("express");
const connection = require("./database/database");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connection
  .authenticate()
  .then(() => console.log("Conexão feita com sucesso!"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => console.log("App is running"));

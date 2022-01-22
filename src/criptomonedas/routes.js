const rutasCriptomonedas = require("express").Router();
const criptomonedas = require("../../db/criptomonedas.js");

rutasCriptomonedas.get("/", (req, res) => {
  res.json(criptomonedas.list());
});

rutasCriptomonedas.post("/", (req, res) => {
  const { nombre, usd } = req.body;
  criptomonedas.create(nombre, usd);
  res.json(criptomonedas.list());
});

rutasCriptomonedas.delete("/:id", (req, res) => {
  const { id } = req.params;
  criptomonedas._delete(id);
  res.json(criptomonedas.list());
});

module.exports = rutasCriptomonedas;
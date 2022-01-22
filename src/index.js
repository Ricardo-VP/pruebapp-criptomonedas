const express = require("express");
const morgan = require("morgan");
const criptomonedas = require("../db/criptomonedas.js");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.json());

// nuestra primera ruta
app.get("/crypto", (req, res) => {
  res.json(criptomonedas.list());
});

app.post("/crypto", (req, res) => {
    const { nombre, usd } = req.body;
    const criptomoneda = criptomonedas.create(nombre, usd);
    res.json(criptomoneda);
});

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});

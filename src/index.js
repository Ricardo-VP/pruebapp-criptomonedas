const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const criptomonedas = require("../db/criptomonedas.js");

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// nuestra primera ruta
app.get("/crypto", (req, res) => {
  res.json(criptomonedas.list());
});

app.post("/crypto", (req, res) => {
    const { nombre, usd } = req.body;
    criptomonedas.create(nombre, usd);
    res.json(criptomonedas.list());
});

app.delete("/crypto/:id", (req, res) => {
    const { id } = req.params;
    criptomonedas._delete(id);
    res.json(criptomonedas.list());
})

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes.js");

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

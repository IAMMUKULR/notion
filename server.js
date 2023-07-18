require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const User = require("./routes/User.routes");
const DatabaseConnection = require("./config/DB.config");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

/* Database Connection */
DatabaseConnection();

/* API */
app.use("/api/user", User);

/* PORT Connection */
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

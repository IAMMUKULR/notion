require("dotenv").config();
const mongoose = require("mongoose");

const DatabaseConnection = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
    })
    .then(() => console.log("Database Connected Successfully...✅"))
    .catch((error) => console.log("Database Failed to connect...❌", error));
};

module.exports = DatabaseConnection;

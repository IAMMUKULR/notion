const { Login, Register } = require("../controllers/User.controllers");
const router = require("express").Router();

router.post("/register", Register);
router.post("/login", Login);

module.exports = router;

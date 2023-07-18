const { doesUserExist, registerUser } = require("../services/User.services");
// const { generateToken } = require("../services/Token.services");
const bcrypt = require("bcryptjs");

const Register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(401).json({
        response: false,
        message: "Please Fill All Details.",
      });
    }

    const UserExist = await doesUserExist(phone);

    const hashedpassword = await bcrypt.hash(password, 10);
    const payload = { name, email, phone, password: hashedpassword };

    if (!UserExist) {
      const RegisteredUser = await registerUser(payload);
      if (!RegisteredUser) {
        return res.status(401).json({
          response: false,
          message: "Not Able To Register User.",
        });
      }

      // const token = await generateToken();

      return res.status(200).json({
        response: true,
        message: "User Registered Successfully",
        User: RegisteredUser,
        // token,
      });
    } else {
      return res.status(409).json({
        response: false,
        message: "User Already Exist.",
      });
    }
  } catch (err) {
    return res.status(500).json({
      response: false,
      message: "Internal Server Error",
    });
  }
};

const Login = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const UserExist = await doesUserExist(phone);
    if (UserExist) {
      const matchPassword = await bcrypt.compare(password, UserExist.password);

      if (matchPassword) {
        // const token = await generateToken();

        return res.status(200).json({
          response: true,
          message: "User Logged In Successfully",
          User: UserExist,
          // token,
        });
      } else {
        return res.status(401).json({
          response: false,
          message: "Invalid Password",
        });
      }
    } else {
      return res.status(404).json({
        response: false,
        message: "User Not Found.",
      });
    }
  } catch (err) {
    return res.status(500).json({
      response: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { Register, Login };

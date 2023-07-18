const User = require("../models/User.models");

const doesUserExist = async (phone) => {
  const user = await User.findOne({ phone });
  return user;
};

const registerUser = async (payload) => {
  const newUser = await User.create(payload);
  return newUser;
};

module.exports = { doesUserExist, registerUser };

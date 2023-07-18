const axios = require("axios");
const generateToken = async () => {
  let token = "";
  const data = {
    grant_type: "password",
    username: "NotionIns",
    password: "YbdKvmDZhsh2w78",
    scope: "esbmotor",
    client_id: "NotionIns",
    client_secret:
      "McZA2GeYGgblMAt0ZKz8cyB7TwWWuDPeOEyRZVEKavJnQbksXTpWJ3lN8hptjM40",
  };
  await axios
    .post(
      "https://ilesbapigee.insurancearticlez.com/generate-jwt-token",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then(function (response) {
      token = response;
    })
    .catch((err) => {
      console.log(err);
    });
  return token;
};

module.exports = { generateToken };

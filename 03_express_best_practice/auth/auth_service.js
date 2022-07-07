const authRepository = require("./auth.repository");

const userLogin = (req, res) => {
  // ...
  //   logic untuk melanjutkan proses
  // ...
  const getUser = authRepository.getUserLoginDetail();
  // ...
  //   logic untuk melanjutkan proses
  // ...
  return getUser;
};

const authService = {
  userLogin
}

module.exports = authService;
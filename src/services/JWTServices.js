import User from "../model/User";

const getIsAdmin = async (user) => {
  //scope
  let isAdminCheck = await User.findOne({ email: user.email }, "email isAdmin");
  return isAdminCheck;
};

module.exports = { getIsAdmin };

import User from "../model/User";
import { comparePassword } from "../utils/bcryptPassword";
import { createJWT } from "../middleware/JWTAction";

const loginService = async (data) => {
  let email = data.email;
  let password = data.password;
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      let isAdmin = user.isAdmin;
      if (isAdmin === true) {
        let isCorrectPassWord = comparePassword(password, user.password);
        if (isCorrectPassWord === true) {
          // let data = await getIsAdmin(user);
          let payload = {
            email: user.email,
            isAdmin: user.isAdmin,
          };
          let token = createJWT(payload);
          return {
            EM: "Ok!",
            EC: 0,
            DT: {
              access_token: token,
              email: user.email,
            },
          };
        }
      }
    }
    return {
      EM: "Your email/phone number or password is incorrect",
      EC: 1,
      DT: "",
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "error something went wrong service",
      EC: -2,
    };
  }
};

module.exports = { loginService };

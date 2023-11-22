import User from "../model/User";
import { hashPassWord, comparePassword } from "../utils/bcryptPassword";
import { createJWT } from "../middleware/JWTAction";
import { getIsAdmin } from "./JWTServices";
import "dotenv/config";

const checkEmailExists = async (inputEmail) => {
  try {
    let email = await User.findOne({ email: inputEmail });
    if (email) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

const registerService = async (data) => {
  try {
    let email = await checkEmailExists(data.email);
    if (email === true) {
      return {
        EM: "Email already exists",
        EC: -3,
        DT: "",
      };
    }
    let password = hashPassWord(data.password);
    let user = await User.create({
      email: data.email,
      password: password,
      isAdmin: false,
    });
    if (user) {
      return {
        EM: "Create User Successful",
        EC: 0,
        DT: "",
      };
    }
  } catch (error) {
    return {
      EM: "error something went wrong service",
      EC: -2,
    };
  }
};

const loginService = async (data) => {
  let email = data.email;
  let password = data.password;
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      let isCorrectPassWord = comparePassword(password, user.password);
      if (isCorrectPassWord === true) {
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
            isAdmin: user.isAdmin,
          },
        };
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

module.exports = {
  registerService,
  loginService,
};

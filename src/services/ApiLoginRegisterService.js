import User from '../model/User';
import { hashPassWord, comparePassword } from '../utils/bcryptPassword';

const checkEmailExists = async (inputEmail) => {
  try {
    let email = await User.findOne({ email: inputEmail })
    if (email) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log(error);
  }
}

const registerService = async (data) => {
  try {
    let email = await checkEmailExists(data.email);
    if (email === true) {
      return {
        EM: 'Email already exists',
        EC: -3,
        DT: ''
      }
    }
    let password = hashPassWord(data.password)
    let user = await User.create({
      email: data.email,
      password: password
    });
    if (user) {
      return {
        EM: 'Create User Successful',
        EC: 0,
        DT: ''
      }
    }
  } catch (error) {
    return {
      EM: 'error something went wrong service',
      EC: -2
    }
  }
}

const loginService = async (data) => {
  try {
    let user = await User.findOne({ email: data.email })
    if (user) {
      let isCorrectPassWord = comparePassword(data.password, user.password)
      if (isCorrectPassWord === true) {
        return {
          EM: 'Ok!',
          EC: 0,
          DT: ''
        }
      }
    }
    return {
      EM: 'Your email/phone number or password is incorrect',
      EC: 1,
      DT: ''
    }
  } catch (error) {
    return {
      EM: 'error something went wrong service',
      EC: -2
    }
  }
}

module.exports = {
  registerService, loginService
}
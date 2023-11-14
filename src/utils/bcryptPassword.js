import bcrypt from "bcrypt";

const salt = bcrypt.genSaltSync(10);
const hashPassWord = (password) => {
  const hash = bcrypt.hashSync(password, salt);
  return hash
  // Store hash in your password DB.
}
const comparePassword = (inputPassword, hashPassword) => {
  return bcrypt.compareSync(inputPassword, hashPassword); // true or false
}

module.exports = { hashPassWord, comparePassword }
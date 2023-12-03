import jwt from "jsonwebtoken";
import "dotenv/config";

//Router not block
const createJWT = (payload) => {
  let token = null;
  let key = process.env.JWT_SECRET;
  try {
    token = jwt.sign(payload, key, { expiresIn: process.env.JWT_EXPIRES_IN });
  } catch (error) {
    console.log(error);
  }
  return token;
};

const verifyToken = (token) => {
  let key = process.env.JWT_SECRET;
  let data = null;
  try {
    let decoded = jwt.verify(token, key);
    data = decoded;
  } catch (error) {
    // console.log(error);
  }
  return data;
};

const extractToken = (req) => {
  if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};

const checkUserJWT = (req, res, next) => {
  let cookies = req.cookies;

  let tokenFormHeader = extractToken(req);
  if ((cookies && cookies.jwt) || tokenFormHeader) {
    let token = cookies && cookies.jwt ? cookies.jwt : tokenFormHeader;
    let decoded = verifyToken(token);
    console.log(decoded);
    if (decoded) {
      req.user = decoded;
      req.token = token;
      next();
    } else {
      return res.status(401).json({
        EM: "Not authorized the user",
        EC: -1,
        DT: "",
      });
    }
  } else {
    return res.status(401).json({
      EM: "Not authorized the user",
      EC: -1,
      DT: "",
    });
  }
};
module.exports = { createJWT, verifyToken, checkUserJWT };

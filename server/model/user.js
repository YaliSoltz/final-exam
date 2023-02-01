const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

// mongoose schema
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", schema);

// joi schema
const joiSchema = Joi.object({
  name: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  password: Joi.string().required(),
});

// func that takes id + phoneNumber of the user and generate it to token
function generateJWT(user) {
  const { _id, name } = user;
  const token = jwt.sign({ _id, name }, "final-project");
  return token;
}

module.exports = { User, joiSchema, generateJWT };

const Joi = require("joi");

// joi schema
const joiSchema = Joi.object({
  phoneNumber: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = { joiSchema };

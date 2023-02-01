const mongoose = require("mongoose");
const Joi = require("joi");

// mongoose schema
const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  registered: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Job = mongoose.model("Job", schema);

// joi schema
const joiSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = { Job, joiSchema };

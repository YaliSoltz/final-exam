const { Router } = require("express");
const bcrypt = require("bcrypt");
const _ = require('lodash');
const { User, joiSchema } = require("../model/user");
const router = Router();

// get all the users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
});

// add new user
router.post("/", async (req, res) => {
  const body = req.body;

  const { error } = joiSchema.validate(body); // validate the client
  if (error) return res.status(400).send(error.message);

  let {name, phoneNumber, password } = body;

  const salt = await bcrypt.genSalt(10); // generate the salt
  password = await bcrypt.hash(password, salt); // change the password to hashing password

  let user = new User({
    name, 
    phoneNumber,
    password,
  });

  try {
    user = await user.save();
    res.status(201).send(_.pick(user, ['name', 'phoneNumber']));
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;

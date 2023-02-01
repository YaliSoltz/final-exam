const { Router } = require("express");
const bcrypt = require("bcrypt");
const { joiSchema } = require("../model/login");
const { User, generateJWT } = require("../model/user");
const router = Router();

router.post("/", async (req, res) => {
  const body = req.body;
  const { phoneNumber, password } = body;
  const { error } = joiSchema.validate(body); //joi validation
  if (error) return res.status(400).send(error.message);

  let user = await User.findOne({ phoneNumber }); // check if user exist
  if (!user) return res.status(400).send("invalid phone-number or password");

  const decode = await bcrypt.compare(password, user.password); // check if password is correct
  if (!decode) return res.status(400).send("invalid phone-number or password");

  const token = generateJWT(user);
  res.status(200).send(token);
});

module.exports = router;

const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {registerValidation,loginValidation} = require("../validation")

router.post("/register", async (req, res) => {
  const{error} = registerValidation(req.body)
  if(error) return res.status(400).send(error.details[0].message); 
  
  //checking if the user exist
  const emailExist = await User.findOne({emailAddress: req.body.emailAddress})
  if(emailExist) return res.status(400).send('email exist')
  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password,salt)
  
  //create new user
  const user = new User({
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  emailAddress: req.body.emailAddress,
  password: hashedPassword,
})
try {
  const saveUser = await user.save();
  res.send(saveUser)
} catch (err) {
  res.status(400).send(err);
  
}  
});
router.post("/login", async (req, res) => {
  const{error} = loginValidation(req.body)
  if(error) return res.status(400).send(error.details[0].message); 
  const user = await User.findOne({emailAddress: req.body.emailAddress})
  if(!user) return res.status(400).send('email does not exist')
  const validPass = await bcrypt.compare(req.body.password,user.password)
  if(!validPass) return res.status(400).send('invalid password')


  //creat token
  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
  res.header('auth-token',token).send(token)
})

module.exports = router;
//npm install @hapi/joi

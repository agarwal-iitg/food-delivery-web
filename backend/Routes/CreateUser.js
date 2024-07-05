const express = require('express')
const router = express.Router()
const User = require("../models/User")
const { check, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const jwtSecret = "herholinesssatgurumatasudhikshajimaharaj#5"

// crete User Logic
// ---------------
router.post("/createuser",[
    // username must be an email
    check('email',"Must be a valid email").isEmail(),
    // password must be at least 5 chars long
    check('password',"Min. length should be 5 cahracters").isLength({ min: 5 }),
    // check('name').isLength({ min: 5 })
  ],
    
    async(req, res)=>{
        const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)

    try {
        await User.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:secPassword
        })
    res.json({success:true})
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
})


// login User Logic
// ----------------

router.post("/loginuser",[
    // username must be an email
    check('email').isEmail(),
    // password must be at least 5 chars long
    check('password',"Min. length should be 5 cahracters").isLength({ min: 5 }),
    // check('name').isLength({ min: 5 })
  ],
    
    async(req, res)=>{
        const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

    let email=req.body.email;
    try {
        let userData = await User.findOne({email})
        if(!userData){
          return res.status(400).json({ errors: "Either email is wrong or password in incorrect" });
        }
        let entered_password=req.body.password;
        let pswdcompare = await bcrypt.compare(entered_password, userData.password)
        if(!pswdcompare){
          return res.status(400).json({ errors: "Either email is wrong or password in incorrect"})
        }

        const data={
          user:{
            id:userData.id
          }
        }

        const authToken = jwt.sign(data,jwtSecret)

        return res.json({success:true , authToken:authToken})
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
})

module.exports = router
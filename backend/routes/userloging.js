const express = require('express')
//controller functions
const {loginUser,signUpUser} = require  ('../controllers/userController.js')
const User = require('../models/userModel');


const router = express.Router();


//login route
router.post('/login' , loginUser)


//signup route
router.post('/signup' , signUpUser)





module.exports = router
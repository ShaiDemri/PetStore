const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

//Get user by user name
router.get(':username');
//update user by user name
router.put(':username');
//delete user by user name
router.delete(':username');
//Logs user into the system
router.get('login');
//Logs out user into the system
router.get('logout');
//Create a new user
router.post('/');





module.exports = router;

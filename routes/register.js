const express = require('express')
const router = express.Router()
// -------- all controllers
const allRegisterController = require('../controller/register')
// --------------------regester routes
router.get('/', allRegisterController.getRegister),



    module.exports = router
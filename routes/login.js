const express = require('express')
const router = express.Router()
// -------- all controllers
const allLoginController = require('../controller/login')
//--------------------login routes
router.get('/', allLoginController.getLogin)



module.exports = router
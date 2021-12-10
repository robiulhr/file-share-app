const express = require('express')
const router = express.Router()
// -------- all controllers
const sentEmail = require('../controller/sentEmail')
// --------------------regester routes
router.post('/', sentEmail)
module.exports = router


// ---------------------------------- stoping the work for now for this functionslity --------------------------//

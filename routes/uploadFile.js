
const express = require('express')
const router = express.Router()
// -------- all controllers
const alluploadFileController = require('../controller/uploadFile')
//--------------------login routes
router.get('/:id', alluploadFileController.getuplaadFile);


module.exports = router
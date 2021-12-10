const express = require('express')
const router = express.Router()
const multerFileupload = require('../middlewares/multerFileupload')
const upload = multerFileupload()
// -------- all controllers
const allhomeController = require('../controller/home')
//--------------------login routes
router.get('/', allhomeController.gethome)
router.post('/', upload.single('formData'), allhomeController.posthome)



module.exports = router
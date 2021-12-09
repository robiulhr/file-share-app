const express = require('express')
const router = express.Router()

const multer = require('multer')
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
};
//------------ multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploadFiles/')
        console.log(file);
    },
    filename: (req, file, cb) => {
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, uuidv4() + '.' + ext);
    },
    fileFilter: (req, file, cb) => {
        const isValid = !!MIME_TYPE_MAP[file.mimetype];
        let error = isValid ? null : new Error('only image allowed!');
        cb(error, isValid);
    }

})

const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }// 10 mb
})


// -------- all controllers
const allhomeController = require('../controller/home')
//--------------------login routes
router.get('/', allhomeController.gethome)
router.post('/', upload.single('formData'), allhomeController.posthome)



module.exports = router
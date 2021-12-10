const fileSchema = require('../db/file db/fileSchema')
const path = require('path');
const { v4: uuidv4 } = require('uuid');
module.exports = {
    gethome: (req, res) => {
        res.render('pages/home')
    },
    posthome: (req, res, next) => {
        let uuid = uuidv4()
        if (req.file) {
            const { filename, path } = req.file
            const fileData = new fileSchema({
                filename: filename,
                path: path,
                uuid: uuid
            });
            fileData.save(function (err, data) {
                if (err) throw err;
            });
            res.json({
                fileEndpoint: `${req.header('protocol') ? req.header('protocol') : ''}${req.header('Host')}/uploadfile/${uuid}`
            })
        }
    }
}
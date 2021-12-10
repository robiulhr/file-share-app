const fileSchema = require('../db/file db/fileSchema')
const path = require('path');
const { v4: uuidv4 } = require('uuid');
module.exports = {
    gethome: async (req, res) => {
        res.render('pages/home')
    },
    posthome: async (req, res, next) => {
        try {
            let uuid = uuidv4()
            if (req.file) {
                const { filename, path } = req.file
                const fileData = await new fileSchema({
                    filename: filename,
                    path: path,
                    uuid: uuid
                });
                await fileData.save(function (err, data) {
                    if (err) throw err;
                });
                // ------------ protocol fixing
                if (req.header('protocol')) {
                    console.log('it contain')

                } else {
                    console.log('not contain')
                }
                //-------------------------------
                res.json({
                    fileEndpoint: `${req.header('protocol') ? req.header('protocol') : ''}${req.header('Host')}/uploadfile/${uuid}`
                    // fileEndpoint: `${req.header('protocol')}`
                })
            }
        } catch (error) {
            res.status(510).send('something went worng')
        }

    }
}
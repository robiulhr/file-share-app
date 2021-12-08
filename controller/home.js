const fileSchema = require('../db/file db/fileSchema')

module.exports = {
    gethome: (req, res) => {
        res.render('pages/home', { filepath: '' })
    },
    posthome: (req, res, next) => {
        if (req.file) {
            const { filename, path } = req.file
            const fileData = new fileSchema({
                filename: filename,
                path: path
            });
            fileData.save(function (err, data) {
                if (err) throw err;
                console.log(data)
            });
            res.render('pages/home', { filepath: path })

        }
    }
}
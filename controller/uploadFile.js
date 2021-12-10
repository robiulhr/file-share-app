const fileSchema = require('../db/file db/fileSchema')
module.exports = {
    getuplaadFile: async (req, res) => {
        let fileUuid = req.params.id
        let siteLink = `${req.header('protocol') ? req.header('protocol') : ''}${req.header('Host')}/`
        let file = await fileSchema.findOne({ 'uuid': fileUuid });
        if (file) {
            return res.render('pages/uploadedFile', { file: file, siteLink: siteLink })
        } else {
            return res.status(500).render('pages/pagenotfound')
        }
    }
}

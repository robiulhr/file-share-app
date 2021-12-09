const fileSchema = require('../db/file db/fileSchema')
module.exports = {
    getuplaadFile: async (req, res) => {
        let fileUuid = req.params.id
        let file = await fileSchema.findOne({ 'uuid': fileUuid });
        if (file) {
            return res.render('pages/uploadedFile', { file: file })
        } else {
            return res.status(500).render('pages/pagenotfound')
        }
    }
}

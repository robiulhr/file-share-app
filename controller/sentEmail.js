const nodemailer = require('nodemailer')


module.exports = sentEmail = (req, res) => {
    if (!req.body.emailfrom == "" && req.body.emailto == "") {
        console.log(req.body.emailfrom, req.body.emailto)
    }
    console.log(req.body)
    res.status(500).redirect('/')
}


// ---------------------------------- stoping the work for now for this functionslity --------------------------

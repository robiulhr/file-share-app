module.exports = nodemailer = (service) => {

    const transporter = nodemailer.createTransport({
        service: service,
        auth: {
            user: secure_configuration.EMAIL_USERNAME,
            pass: secure_configuration.PASSWORD,
            clientId: "161448832536-e57pbrpal76v89a24ste0igkk0p6mb6v.apps.googleusercontent.com",
            clientSecret: "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",
            refreshToken: secure_configuration.REFRESH_TOKEN
        }
    });
}

// ---------------------------------- stoping the work for now for this functionslity --------------------------

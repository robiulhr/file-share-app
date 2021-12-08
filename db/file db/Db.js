const mongoose = require("mongoose");

DbConnect = async (DB_URL) => {
    try {
        await mongoose.connect(DB_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }

        )
        console.log("database connected");
    } catch (error) {
        console.log(error)
    }
}


module.exports = DbConnect
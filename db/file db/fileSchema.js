const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true
    },
    date: { type: Date, default: Date.now },
    uuid: {
        type: String, required: true
    }
});

const file = mongoose.model("file", fileSchema);

module.exports = file;
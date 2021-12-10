
const express = require('express')
const app = express()
require('dotenv').config()


const PORT = process.env.PORT || 3000
//----------- serve static file
app.use('/', express.static('public'))
app.use('/uploadfile', express.static('public'))
app.use('/uploadfile', express.static('uploadFiles'))


//---------- ejs tamplate engine setup
app.set('view engine', 'ejs')
// -------------form data access
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ------------ database setup

const DB_URL = process.env.DB_URL
const mongoose = require("mongoose");
const DbConnect = require('./db/file db/Db')
DbConnect(DB_URL)
// ---------------all routes
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register')
const homeRoutes = require('./routes/home')
const uploadsFileRoutes = require('./routes/uploadFile')
const sentEmail = require('./routes/sentEmail')
//-----------
app.use('/login', loginRoutes)
app.use('/register', registerRoutes)
app.use('/', homeRoutes)
app.use('/uploadfile', uploadsFileRoutes)
app.use('/sentemail', sentEmail)
// page not found
app.all('*', (req, res) => {
    res.status(404).render('pages/pagenotfound')
})

//---------- listening the port
app.listen(PORT, () => {
    console.log(`app listening at ${PORT}`)
})


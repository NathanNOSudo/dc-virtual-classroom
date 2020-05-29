const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require("body-parser")
const path = require('path')
const models = require('./models')
const bcrypt = require("bcrypt")
const session = require("express-session")
const indexRoutes = require("./routes/index")
const instructorRoutes = require("./routes/instructor")
const studentRoutes = require("./routes/student")
const checkAuthorization = require("./middleware/authorization")
const PORT = process.env.PORT || 3003

console.log("test")

app.use(session({
    secret: 'pineapple_octo',
    resave: true,
    saveUninitialized: false
}))

const VIEWS_PATH = path.join(__dirname, '/views')
global.__basedir = __dirname

app.use(express.urlencoded())

app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.locals.isAuthenticated = false
    next()
})

app.use('/assets', express.static('assets'))
// app.use(express.static("assets"))

function checkIfAdmin(req, res, next) {
    if (req.session.userType == "admin") {
        next()
    } else {
        res.redirect("/")
    }
}

function checkIfStudent(req, res, next) {
    if (req.session.userType == "student") {
        next()
    } else {
        res.redirect("/")
    }
}

// BUG: 
// need to check authorization on main page to maintain proper navbar but it's not working
// tried adding checkAuth function but it results in a loop
app.use("/", indexRoutes)
app.use("/student", checkAuthorization, checkIfStudent, studentRoutes)
app.use("/instructor", checkAuthorization, checkIfAdmin, instructorRoutes)


app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set("views", VIEWS_PATH)
app.set("view engine", "mustache")

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3003")
})
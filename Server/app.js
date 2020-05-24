const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require("body-parser")
const path = require('path')
const models = require('./models')
const bcrypt = require("bcrypt")
const session = require("express-session")

app.use(session({
    secret: 'pineapple_octo',
    resave: true,
    saveUninitialized: false
}))

const SALT_ROUNDS = 10
const VIEWS_PATH = path.join(__dirname, '/views')

app.use(express.urlencoded())

app.use(bodyParser.urlencoded({ extended: false }))

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set("views", VIEWS_PATH)
app.set("view engine", "mustache")


app.use('/uploads', express.static('uploads'))
app.use('/assets', express.static('assets'))

app.get("/", (req, res) => {
    res.render("main")
})

app.get("/register", (req, res) => {
    res.render("register")
})
// see Mr. Azam's video on Async and await if async and await is confusing. It's not complicated at all.
// Async and await basically replaces .then() chaining
// https://www.udemy.com/course/nodejs-complete-guide-to-building-data-driven-applications/learn/lecture/14311354#content

app.post("/register", async (req, res) => {
    let fullName = req.body.fullName
    let email = req.body.email
    let password = req.body.password

    let persistedUser = await models.User.findOne({
        where: {
            username: email
        }
    })

    if (persistedUser == null) {

        bcrypt.hash(password, SALT_ROUNDS, async (error, hash) => {
            if (error) {
                res.render("/register", { mesage: "Error creating users!" })
            } else {
                let user = models.User.build({
                    username: email,
                    password: hash,
                    fullName: fullName
                })
                let savedUser = await user.save()
                if (savedUser != null) {
                    res.redirect("/login")
                } else {
                    res.render("/register", { message: "User already exists!" })
                }
            }
        })
    }
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/login", async (req, res) => {
    let email = req.body.email
    let password = req.body.password

    let user = await models.User.findOne({
        where: {
            username: email
        }
    })

    if (user != null) {
        bcrypt.compare(password, user.password, (error, result) => {

            if (result) {

                // create a session
                if (req.session) {
                    req.session.user = {userId: user.id}
                    // need to set a proper page
                    res.redirect('/users/products')
                } 
                
            } else {
                res.render('login', {message: "Incorrect username or password"})
            }

        })
    } else { //if the user is null
        res.render("login", {message: "Incorrect username or password"})
    }
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})
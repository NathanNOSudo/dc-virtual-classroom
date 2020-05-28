const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const models = require("../models")

const SALT_ROUNDS = 10


router.get("/", (req, res) => {
    res.render("main")
})

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/register", (req, res) => {
    res.render("register")
})

router.post("/register", async (req, res) => {
    let firstName = req.body.firstname
    let lastName = req.body.lastname
    let email = req.body.email
    let password = req.body.password
    let fullName = firstName + lastName

    let persistedUser = await models.User.findOne({
        where: {
            username: email
        }
    })

    if (persistedUser == null) {

        bcrypt.hash(password, SALT_ROUNDS, async (error, hash) => {
            if (error) {
                res.render("register", { mesage: "Error creating users!" })
            } else {
                let user = await models.User.build({
                    username: email,
                    password: hash,
                    fullName: fullName
                })
                let savedUser = await user.save()
                if (savedUser != null) {
                    res.redirect("/login")
                } else {
                    res.render("register", { message: "User already exists!" })
                }
            }
        })
    }
})

router.post("/login", async (req, res) => {
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
                    req.session.user = { userId: user.id }
                    req.session.userType = user.userType
                    // need to set a proper page
                    console.log(user.userType)
                    if (user.userType == "admin") {
                        res.redirect("/instructor/instructor-dash")
                    } else if (user.userType == "student") {
                        res.redirect("/student/student-dashboard")
                    } else {
                        res.redirect('/')
                    }
                }

            } else {
                res.render('login', { message: "Incorrect username or password" })
            }

        })
    } else { //if the user is null
        res.render("login", { message: "Incorrect username or password" })
    }
})

module.exports = router
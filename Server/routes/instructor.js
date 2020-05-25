const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const models = require("../models")

const SALT_ROUNDS = 10



router.get("/instructor-dash", (req, res) => {
    res.render("instructor/instructor-dash")
})
router.get("/instructor-courses", (req, res) => {
    res.render("instructor/instructor-courses")
})
router.get("/instructor-quizzes", (req, res) => {
    res.render("instructor/instructor-quizzes")
})
router.get("/instructor-edit-course", (req, res) => {
    res.render("instructor/instructor-edit-course")
})
router.get("/instructor-edit-quiz", (req, res) => {
    res.render("instructor/instructor-edit-quiz")
})

module.exports = router
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const models = require("../models")

const SALT_ROUNDS = 10


router.get("/student-dashboard", (req, res) => {
    res.render("student/student-dashboard")
})
router.get("/student-my-quizzes", (req, res) => {
    res.render("student/student-my-quizzes")
})
router.get("/student-quiz-result-details", (req, res) => {
    res.render("student/student-quiz-result-details")
})
router.get("/student-quiz-result", (req, res) => {
    res.render("student/student-quiz-result")
})
router.get("/student-take-quiz", (req, res) => {
    res.render("student/student-take-quiz")
})
router.get("/student-my-courses", (req, res) => {
    res.render("student/student-my-courses")
})


module.exports = router
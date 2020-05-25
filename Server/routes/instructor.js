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
router.get("/instructor-create-quiz", (req, res) => {
    res.render("instructor/instructor-create-quiz")
})

router.get("/instructor-edit-course", (req, res) => {
    res.render("instructor/instructor-edit-course")
})
router.get("/instructor-edit-quiz", (req, res) => {
    res.render("instructor/instructor-edit-quiz")
})

router.post("/update-title-name", (req, res) => {
    res.render("instructor/instructor-edit-quiz")
})
router.post("/update-title-name", (req, res) => {
    res.render("instructor/instructor-edit-quiz")
})
router.post("/update-title-name", (req, res) => {
    res.render("instructor/instructor-edit-quiz")
})

router.post("/instructor-create-quiz", (req, res) => {
    const quizTitle = req.body.quizTitle
    const questionField = req.body.questionField
    const choiceA = req.body.choiceA
    const choiceB = req.body.choiceB
    const choiceC = req.body.choiceC
    const choiceD = req.body.choiceD
    const correctAnswer = req.body.correctAnswer

    let quiz = models.Quiz.build({
        choice1: choiceA,
        choice2: choiceB,
        choice3: choiceC,
        choice4: choiceD,
        correct: correctAnswer,
        
    })

    res.redirect("/instructor/instructor-quizzes")
})

module.exports = router
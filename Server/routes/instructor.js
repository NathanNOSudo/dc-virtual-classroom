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
router.get("/instructor-quizzes", async (req, res) => {
    const quiz = await models.Quiz.findAll({
        where: {
            question: "Quiz Question 1"
        }
    })

    console.log(quiz.dataValues)
    res.render("instructor/instructor-quizzes")
})

// router.post("/instructor-quizzes", async (req, res) => {

//     res.render("instructor/instructor-quizzes")
// })

router.get("/instructor-create-quiz", (req, res) => {
    res.render("instructor/instructor-create-quiz")
})

router.get("/instructor-edit-course", (req, res) => {
    res.render("instructor/instructor-edit-course")
})
router.get("/instructor-edit-quiz", (req, res) => {
    res.render("instructor/instructor-edit-quiz")
})

// router.post("/instructor-edit-quiz", (req, res) => {

//     let persistedQuiz = await quiz.save()
//     if (persistedQuiz != null) {
//         res.redirect("/instructor/instructor-edit-quiz")
//     } else {
//         res.render("instructor/instructor-create-quiz")
//     }
// })

router.post("/update-title-name", (req, res) => {
    res.render("instructor/instructor-edit-quiz")
})
router.post("/update-title-name", (req, res) => {
    res.render("instructor/instructor-edit-quiz")
})
router.post("/update-title-name", (req, res) => {
    res.render("instructor/instructor-edit-quiz")
})

router.post("/instructor-create-quiz", async (req, res) => {
    const quizTitle = req.body.quizTitle
    const questionField = req.body.questionField
    const choiceA = req.body.choiceA
    const choiceB = req.body.choiceB
    const choiceC = req.body.choiceC
    const choiceD = req.body.choiceD
    const correctAnswer = req.body.correctAnswer
    const question = req.body.questionField

    let quiz = models.Quiz.build({
        choice1: choiceA,
        choice2: choiceB,
        choice3: choiceC,
        choice4: choiceD,
        correct: correctAnswer,
        question: questionField,
        quizName: quizTitle,
        question: question
    })
    console.log(quizTitle)

    let persistedQuiz = await quiz.save()
    
    if (persistedQuiz != null) {
        res.redirect('/instructor/instructor-quizzes')
    } else {
        res.render('instructors/instructor-create-quiz', { message: 'Unable to add quiz' })
    }
})

module.exports = router
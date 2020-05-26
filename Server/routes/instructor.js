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
    const quiz = await models.Quiz.findOne({
        where: {
            id: 11
        }
    })
    console.log(quiz.dataValues)
    res.render("instructor/instructor-quizzes", quiz.dataValues)
})

router.get("/instructor-quizzes/:quizzes"), async (req, res) => {
    const quizzes = req.params.quizzes
    const quiz = await models.Quiz.findOne({
        where: {
            id: 11
        }
    })

    console.log(quiz.dataValues)

    res.render("/")
}

// router.post("/instructor-quizzes", async (req, res) => {

//     res.render("instructor/instructor-quizzes")
// })

router.get("/instructor-create-quiz", (req, res) => {
    res.render("instructor/instructor-create-quiz")
})

router.get("/instructor-edit-course", (req, res) => {
    res.render("instructor/instructor-edit-course")
})
router.get("/instructor-edit-quiz", async (req, res) => {
    const quiz = await models.Quiz.findOne({
        where: {
            id: 11
        }
    })
    console.log(quiz.dataValues)

    res.render("instructor/instructor-edit-quiz", quiz.dataValues)
})

router.post("/update-quiz-answer", async (req, res) => {
    const correctAnswer = req.body.correctAnswer

    const updatedQuiz = await models.Quiz.update({
        correct: correctAnswer
    }, {
        where: {
            quizName: "New Quiz"
        }
    })

    res.redirect("instructor/instructor-edit-quiz")
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

    let persistedQuiz = await quiz.save()
    
    if (persistedQuiz != null) {
        res.redirect('/instructor/instructor-quizzes')
    } else {
        res.render('instructor/instructor-create-quiz', { message: 'Unable to add quiz' })
    }
})

module.exports = router
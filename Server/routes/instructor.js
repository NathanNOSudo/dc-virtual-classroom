const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const models = require("../models")

const SALT_ROUNDS = 10



router.get("/instructor-dash", async (req, res) => {
    const quiz = await models.Quiz.findAll()
    const quizValues = quiz.map((ele) => ele.dataValues)
    console.log(quizValues)

    res.render("instructor/instructor-dash", { quizzes: quizValues })
})
router.get("/instructor-courses", (req, res) => {
    res.render("instructor/instructor-courses")
})

// router.get("/instructor-quizzes/quizId", (req, res) => {
//     // const quizId = req.params.id
//     // const quiz = await models.Quiz.findOne({
//     //     where: {
//     //         id: quizId
//     //     }
//     // })

//     console.log("hello world")

//     res.render(`instructor/instructor-quizzes/${quizId}`)
// })

// router.get("/instructor-quizzes", async (req, res) => {
//     const quiz = await models.Quiz.findAll()
//     const quizValues = quiz.map((ele) => ele.dataValues)
//     console.log(quizValues)

//     res.render("instructor/instructor-quizzes", { quizzes: quizValues })
// })

router.get("/instructor-quizzes/:id", async (req, res) => {
    const quizId = req.params.id
    const quiz = await models.Quiz.findOne({
        where: {
            id: quizId
        }
    })

    console.log(quiz)

    res.render("instructor/instructor-quiz", quiz.dataValues)
})

router.get("/instructor-edit-course", (req, res) => {
    res.render("instructor/instructor-edit-course")
})

// EDIT quiz functionality
router.get("/instructor-edit-quiz/:id", async (req, res) => {
    let quizId = req.params.id
    const quiz = await models.Quiz.findOne({
        where: {
            id: quizId
        }
    })
    console.log(quiz.dataValues)

    res.render("instructor/instructor-edit-quiz", quiz.dataValues)
})

router.post("/update-quiz-answer/:id", async (req, res) => {
    const quizId = req.params.id
    const correctAnswer = req.body.correctAnswer
    
    const updatedQuiz = await models.Quiz.update({
        correct: correctAnswer
    }, {
        where: {
            id: quizId
        }
    })

    res.redirect(`/instructor/instructor-edit-quiz/${quizId}`)
})

router.post("/update-title-name/:id", async (req, res) => {
    let quizId = req.params.id
    let quizName = req.body.quizName
    const updatedQuizName = await models.Quiz.update({
        question: quizName
    }, {
        where: {
            id: quizId
        }
    })

    res.redirect(`/instructor/instructor-edit-quiz/${quizId}`)
})

// Create Quiz
router.get("/instructor-create-quiz", async (req, res) => {
    // let users = []
    
    // models.User.findAll()
    //     .then((results) => {
    //         results.forEach((ele => users.push(ele.dataValues.username)))
    // }).then(() => {
    //     console.log(users)
    // })
    // console.log(myUsers)

    let myUsers = await models.User.findAll()

    let userIds = myUsers.map((ele) => ele.dataValues.username)
    
    console.log(userIds)
    // console.log(myUsers.dataValues.username)

    // res.render("instructor/instructor-create-quiz", myUsers.dataValues)

    res.render("instructor/instructor-create-quiz", userIds)
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
    const emailAdd = req.body.emailAdd
    const studentId = req.body.studentId
    const sessionId = req.session.user
    // assign to a student


    const userObject = await models.User.findOne({
        where: {
            username: emailAdd
        }
    })

    let userId = userObject.dataValues.id

    let quiz = models.Quiz.build({
        choice1: choiceA,
        choice2: choiceB,
        choice3: choiceC,
        choice4: choiceD,
        correct: correctAnswer,
        question: questionField,
        quizName: quizTitle,
        question: question,
        assignedTo: userId
    })

    let persistedQuiz = await quiz.save()

    if (persistedQuiz != null) {
        res.redirect('/instructor/instructor-quizzes')
    } else {
        res.render('/instructor/instructor-create-quiz', { message: 'Unable to add quiz' })
    }
})

module.exports = router
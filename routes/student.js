const express = require("express")
const router = express.Router()
const models = require("../models")

router.get("/student-dashboard/", async (req, res) => {
    const currentStudentSession = req.session.user
    console.log(currentStudentSession)
    const currentStudentId = currentStudentSession.userId 
    console.log(currentStudentId)

    // Quizzes are not loading. Something to do with FindAll vs. FindOne. Findall works when there's more than 1 quiz assigned to the same student.
    const studentQuizzes = await models.Quiz.findAll({
        where: {
            assignedTo: currentStudentId
        }
    })
    console.log(studentQuizzes)
    const quizValues = studentQuizzes.map((ele) => ele.dataValues)
    console.log(quizValues)
    res.render("student/student-dashboard", { quizzes: quizValues })
})

router.get("/student-quiz-result", (req, res) => {
    res.render("student/student-quiz-result")
})

router.get("/student-take-quiz/:id", async (req, res) => {
    const quizId = req.params.id

    const quiz = await models.Quiz.findOne({
        where: {
            id: quizId
        }
    })

    res.render("student/student-take-quiz", quiz.dataValues)
})

router.post("/student-take-quiz/:id", async (req, res) => {
    const quizId = req.params.id
    const currentStudentSession = req.session.user
    const currentStudentId = currentStudentSession.userId 
    const studentAnswer = req.body.choice

    const quiz = await models.Quiz.findOne({
        where: {
            id: quizId
        }
    })

    const quizValues = quiz.dataValues
    let isCorrect = 1
    
    if (quizValues.correctAnswer != studentAnswer) {
        isCorrect = 0
    }

    models.completedquizes.create({
        studentId: currentStudentId,
        quizId: quizId,
        studentAnswer: studentAnswer,
        isCorrect: isCorrect
    }).then((response) => {
        console.log(response)
    })

    res.redirect("/student/student-quiz-result")
})


module.exports = router
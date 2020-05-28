const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const models = require("../models")

const SALT_ROUNDS = 10


router.get("/student-dashboard/", async (req, res) => {
    const currentStudentSession = req.session.user
    const currentStudentId = currentStudentSession.userId 
    const studentQuizzes = await models.Quiz.findAll({
        where: {
            assignedTo: currentStudentId
        }
    })

    const quizValues = studentQuizzes.map((ele) => ele.dataValues)
    res.render("student/student-dashboard", { quizzes: quizValues })
})

// router.get("/student-my-quizzes/:id", async (req, res) => {
//     // const studentId = req.params.id
//     const studentId = req.session.user
//     console.log(studentId)
//     const quiz = await models.Quiz.findAll({
//         where: {
//             assignedTo: studentId
//         }
//     })
//     console.log(quiz)
//     res.render("student/student-my-quizzes", quiz.dataValues)
// })

router.get("/student-quiz-result-details", (req, res) => {
    res.render("student/student-quiz-result-details")
})

router.get("/student-quiz-result", (req, res) => {
    res.render("student/student-quiz-result")
})

router.get("/student-take-quiz/:id", async (req, res) => {
    const quizId = req.params.id
    const studentId = req.session.user
    const currentStudentSession = req.session.user
    const currentStudentId = currentStudentSession.userId 
    // quiz database assignedto studentId 
    // 

    console.log(currentStudentId)
    const quiz = await models.Quiz.findOne({
        where: {
            id: quizId
        }
    })
    console.log(quiz)
    

    res.render("student/student-take-quiz", quiz.dataValues)
})

router.post("/student-take-quiz/:id", async (req, res) => {

})


module.exports = router
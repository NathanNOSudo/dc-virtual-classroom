const express = require("express")
const router = express.Router()
const models = require("../models")

router.get("/instructor-dash", async (req, res) => {
    const quiz = await models.Quiz.findAll()
    const quizValues = quiz.map((ele) => ele.dataValues)
    res.render("instructor/instructor-dash", { quizzes: quizValues })
})

router.get("/instructor-quizzes/:id", async (req, res) => {
    const quizId = req.params.id
    const quiz = await models.Quiz.findOne({
        where: {
            id: quizId
        }
    })
    res.render("instructor/instructor-quiz", quiz.dataValues)
})

// EDIT quiz functionality
router.get("/instructor-edit-quiz/:id", async (req, res) => {
    const quizId = req.params.id
    const quiz = await models.Quiz.findOne({
        where: {
            id: quizId
        }
    })

    res.render("instructor/instructor-edit-quiz", quiz.dataValues)
})

router.post("/update-quiz-answer/:id", async (req, res) => {
    const quizId = req.params.id
    const correctAnswer = req.body.correctAnswer
    
    await models.Quiz.update({
        correct: correctAnswer
    }, {
        where: {
            id: quizId
        }
    })

    res.redirect(`/instructor/instructor-edit-quiz/${quizId}`)
})

router.post("/update-title-name/:id", async (req, res) => {
    const quizId = req.params.id
    const quizName = req.body.quizName
    await models.Quiz.update({
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
    const myUsers = await models.User.findAll({
        where: {
            userType: "student"
        }
    })
    const userIds = myUsers.map((ele) => ele.dataValues.username)
    console.log(userIds)

    res.render("instructor/instructor-create-quiz", { users: myUsers })
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

    console.log(emailAdd)

    console.log(typeof (emailAdd))

    let userObject
    // const quizValues = quiz.map((ele) => ele.dataValues)
    
    if (typeof (emailAdd) == "object") {
        console.log("multiple users")
        // parse emailadd array 
        console.log(emailAdd[1])
        for (let i = 0; i < emailAdd.length; i++) {
            models.User.findAll({
                where: {
                    username: emailAdd
                }
            }).then((response) => {
                console.log(response[0].dataValues)
                userObject.push(response[0].dataValues)
            })
        }
        console.log(userObject)

    } else {
        console.log("not multiple")
        userObject = await models.User.findOne({
            where: {
                username: emailAdd
            }
        })
    }

    console.log(userObject.dataValues)

    const userId = userObject.dataValues.id

    const quiz = models.Quiz.build({
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

    // models.Quiz.increment('questionNum', { where: { questionNum: null}})

    const persistedQuiz = await quiz.save()

    if (persistedQuiz != null) {
        res.redirect('/instructor/instructor-quizzes')
    } else {
        res.render('/instructor/instructor-create-quiz', { message: 'Unable to add quiz' })
    }
})

router.get("/instructor-delete-quiz/:id", async (req, res) => {
    let quizId = req.params.id

    await models.completedquizes.update({
        quizId: null
    }, {
        where: {
            quizId: quizId
        }
    }).then(() => {
        models.Quiz.destroy({
            where: {
                id: quizId
            }
        })
    })

    res.redirect("/instructor/instructor-dash")
})

module.exports = router
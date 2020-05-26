'use strict';
module.exports = (sequelize, DataTypes) => {
  const quiz = sequelize.define('quiz', {
    question: DataTypes.STRING,
    choice1: DataTypes.STRING,
    choice2: DataTypes.STRING,
    choice3: DataTypes.STRING,
    choice4: DataTypes.STRING,
    correct: DataTypes.STRING,
    quizName: DataTypes.STRING,
    questionnum: DataTypes.INTEGER
  }, {});
  quiz.associate = function(models) {
    quiz.hasMany(models.completedquizes, {foreignKey: "quizId"})
    // associations can be defined here
    // This is how to link to other tables
  };
  return quiz;
};
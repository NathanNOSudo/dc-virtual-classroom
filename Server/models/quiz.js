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
    questionnum: DataTypes.INTEGER,
    assignedTo: DataTypes.STRING
  }, {});
  quiz.associate = function(models) {
    quiz.hasMany(models.completedquizes, {foreignKey: "quizId"})
    quiz.belongsTo(models.user, {foreignKey: "assignedTo"})
    // associations can be defined here
    // This is how to link to other tables
  };
  return quiz;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quiz = sequelize.define('Quiz', {
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
  Quiz.associate = function(models) {
    Quiz.hasMany(models.completedquizes, {foreignKey: "quizId"})
    Quiz.belongsTo(models.user, {foreignKey: "assignedTo"})
    // associations can be defined here
    // This is how to link to other tables
  };
  return Quiz;
  };

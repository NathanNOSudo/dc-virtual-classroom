'use strict';
module.exports = (sequelize, DataTypes) => {
  const studentQuizComplete = sequelize.define('studentQuizComplete', {
    studentAnswer: DataTypes.STRING,
    // quiz_id: DataTypes.INTEGER,
    // user_id: DataTypes.INTEGER
  }, {});
  studentQuizComplete.associate = function(models) {
    // associations can be defined here
    studentQuizComplete.belongsTo(models.user, {foreignKey: "user_id"})
    studentQuizComplete.belongsTo(models.quiz, {foreignKey: "quiz_id"})
  };
  return studentQuizComplete;
};
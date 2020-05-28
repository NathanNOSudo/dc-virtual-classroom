'use strict';
module.exports = (sequelize, DataTypes) => {
  const completedquizes = sequelize.define('completedquizes', {
    studentId: DataTypes.INTEGER,
    quizId: DataTypes.INTEGER,
    studentAnswer: DataTypes.STRING
  }, {});
  completedquizes.associate = function(models) {
    // associations can be defined here
    completedquizes.belongsTo(models.User, {foreignKey: "studentId"})
    completedquizes.belongsTo(models.Quiz, {foreignKey: "quizId"})
  };
  return completedquizes;}
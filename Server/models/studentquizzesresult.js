'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentQuizzesResult = sequelize.define('StudentQuizzesResult', {
    user_id: DataTypes.STRING,
    user_score: DataTypes.STRING
  }, {});
  StudentQuizzesResult.associate = function(models) {
    // associations can be defined here
    models.StudentQuizzesResult.hasMany(models.Quiz, { as: 'quizzes', foreignKey: 'user_id'})
  };
  return StudentQuizzesResult;
};
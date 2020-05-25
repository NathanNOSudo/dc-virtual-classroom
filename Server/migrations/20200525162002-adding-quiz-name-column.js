'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Quizzes', 'quiz-name', {
      type: Sequelize.STRING,
      allowNull: false
  })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Quizzes", "quiz-name")
  }
};

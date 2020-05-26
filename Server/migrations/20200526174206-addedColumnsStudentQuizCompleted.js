'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  

      
      return queryInterface.addColumn('studentQuizComplete', "user_id", { type: Sequelize.INTEGER, references: {model: "user", key: "id"}});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};

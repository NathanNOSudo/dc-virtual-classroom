'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
       return queryInterface.addColumn('studentQuizCompletes' ,"user_id", {
         type: Sequelize.INTEGER, 
        //  references: {model: "user", key: "id"}
       })},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("studentQuizCompletes", "user_id")
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
     
      Example:
      return queryInterface.dropTable('users');
    */
  }
};
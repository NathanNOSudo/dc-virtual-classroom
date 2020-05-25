'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'userType', {
      type: Sequelize.STRING,
      defaultValue: 'student',
      allowNull: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Users", "userType")
  }
};

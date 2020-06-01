'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullName: DataTypes.STRING,
    userType: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.completedquizes, {foreignKey: "studentId"})
    User.hasMany(models.Quiz, { foreignKey: "assignedTo" })
    
  };
  return User;
};
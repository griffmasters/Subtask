'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    id: {type:DataTypes.STRING,primaryKey: true},
    status: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Tasks.associate = function(models) {
    // associations can be defined here
  };
  return Tasks;
};
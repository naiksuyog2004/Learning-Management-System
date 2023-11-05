'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      courses.belongsTo(models.Users, {
        foreignKey: "userId",
      });

      courses.hasMany(models.chapters, {
        foreignKey: "courseId",
      });
    }
  }
  courses.init({
    courseName: DataTypes.STRING,
    courseDescription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'courses',
  });
  return courses;
};
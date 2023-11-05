'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chapters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      chapters.belongsTo(models.courses, {
        foreignKey: "courseId",
      });

      chapters.hasMany(models.Pages, {
        foreignKey: "chapterId",
      });
    }
  }
  chapters.init({
    chapterName: DataTypes.STRING,
    chapterDescription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'chapters',
  });
  return chapters;
};
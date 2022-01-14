"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      List.hasMany(models.Item, {
        as: "listItem",
        foreignKey: "idList",
      })
    }
  }
  List.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "lists",
      modelName: "List",
    }
  )
  return List
}

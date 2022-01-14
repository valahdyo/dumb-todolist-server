"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.List, {
        as: "listItem",
        foreignKey: "idList",
      })
    }
  }
  Item.init(
    {
      value: DataTypes.STRING,
      done: DataTypes.BOOLEAN,
      idList: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "items",
      modelName: "Item",
    }
  )
  return Item
}

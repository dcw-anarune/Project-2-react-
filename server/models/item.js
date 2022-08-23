'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item.belongsTo(models.user,{foreignKey:'userId'})
    }
  }
  item.init({
    name: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    gambar: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};
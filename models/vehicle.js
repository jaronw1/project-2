'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vehicle.init({
    model_name: DataTypes.STRING,
    make_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    cart: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vehicle',
  });
  return vehicle;
};
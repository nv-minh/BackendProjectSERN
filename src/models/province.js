"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   Province.hasMany(models.Post, { foreignKey: 'userId', as: 'user' })
    }
  }

  Province.init(
    {
      name: DataTypes.STRING,
      division_type: DataTypes.STRING,
      codename: DataTypes.STRING,
      phone_code: DataTypes.STRING,
      province_code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Province",
    }
  );
  return Province;
};

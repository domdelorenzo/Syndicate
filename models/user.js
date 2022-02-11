'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Feed, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
      User.hasMany(models.Folder, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'User',
      tableName: 'users'
    }
  );
  return User;
};

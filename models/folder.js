'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Folder extends Model {
    static associate(models) {
      Folder.hasMany(models.Feed, {
        foreignKey: 'folder_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
      Folder.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
    }
  }
  Folder.init(
    {
      folder_name: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Folder',
      tableName: 'folders'
    }
  );
  return Folder;
};

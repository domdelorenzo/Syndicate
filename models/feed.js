'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feed extends Model {
    static associate(models) {
      Feed.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
      Feed.belongsTo(models.Folder, {
        foreignKey: 'folder_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
    }
  }
  Feed.init(
    {
      feed_name: DataTypes.STRING,
      url: DataTypes.STRING,
      favorite: DataTypes.BOOLEAN,
      folderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'folder_id',
        onDelete: 'CASCADE',
        references: {
          model: 'folders',
          key: 'id'
        }
      },
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
      modelName: 'Feed',
      tableName: 'feeds'
    }
  );
  return Feed;
};

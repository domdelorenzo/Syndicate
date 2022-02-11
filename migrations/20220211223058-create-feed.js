'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('feeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      feed_name: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      favorite: {
        type: Sequelize.BOOLEAN
      },
      folderId: {
        type: Sequelize.INTEGER,
        field: 'folder_id',
        onDelete: 'CASCADE',
        references: {
          model: 'folders',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('feeds');
  }
};

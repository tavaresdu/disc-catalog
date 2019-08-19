'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Discs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            artist: {
                type: Sequelize.STRING
            },
            title: {
                type: Sequelize.STRING
            },
            year: {
                type: Sequelize.INTEGER
            },
            genre: {
                type: Sequelize.STRING
            },
            songs: {
                type: Sequelize.TEXT
            },
            collectionId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Collections',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Discs');
    }
};
'use strict';
module.exports = (sequelize, DataTypes) => {
    const Disc = sequelize.define('Disc', {
        artist: DataTypes.STRING,
        title: DataTypes.STRING,
        year: DataTypes.INTEGER,
        genre: DataTypes.STRING,
        songs: DataTypes.TEXT
    }, {});
    Disc.associate = function (models) {
        Disc.belongsTo(models.Collection, {
            foreignKey: 'collectionId'
        })
    };
    return Disc;
};
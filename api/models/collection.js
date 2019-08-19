'use strict';
module.exports = (sequelize, DataTypes) => {
    const Collection = sequelize.define('Collection', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {});
    Collection.associate = function (models) {
    };
    return Collection;
};
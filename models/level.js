const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const Level = sequelize.define('Level', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Level;
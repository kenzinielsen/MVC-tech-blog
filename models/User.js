const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allownull: false,
            primarykey: true,
            autoIncrement: true
        },
    }
)


module.exports.User;
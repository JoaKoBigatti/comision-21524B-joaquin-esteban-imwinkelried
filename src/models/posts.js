const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config.db");

//preparamos el modelo para la tabla de MySQL
const PostModel = sequelize.define('posts', {
    title: {
        type: DataTypes.STRING,
        validate: { notEmpty: true }
    },
    content: {
        type: DataTypes.TEXT,
        validate: { notEmpty: true }
    },
    author: {
        type: DataTypes.STRING,
        validate: { notEmpty: true }
    },
    img: {
        type: DataTypes.STRING,
        isUrl: true
    },

});

module.exports = { PostModel }
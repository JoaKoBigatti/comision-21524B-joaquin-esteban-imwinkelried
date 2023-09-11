const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config.db");

const PostModel= sequelize.define('posts',{
    title:{
        type:DataTypes.STRING,
        validate: {notEmpty: true}
    },
    content:{
        type:DataTypes.TEXT,
        validate: {notEmpty: true}
    },
    author:{
        type:DataTypes.STRING,
        validate: {notEmpty: true}
    },
    img: DataTypes.STRING,

});

module.exports={PostModel}
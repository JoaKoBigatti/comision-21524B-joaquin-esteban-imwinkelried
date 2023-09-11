const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('foro', process.env.USER_MYSQL, process.env.PASSWORD_MYSQL, {
    hots: 'localhost',
    dialect: 'mysql'
})

module.exports = { sequelize }
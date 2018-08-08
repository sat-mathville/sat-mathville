const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
    description: {
        type: Sequelize.STRING,
    }
})

module.exports = Category

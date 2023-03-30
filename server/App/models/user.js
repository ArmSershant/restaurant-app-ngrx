const Sequelize = require('sequelize')
const User = (sequelize) => sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING
  }
},
  {
    freezeTableName: true,
    timestamps: false
  })
module.exports = User

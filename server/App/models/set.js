// id,name,foods[]
const Sequelize = require('sequelize')
const Set = (sequelize) => sequelize.define('set', {
   name: {
      type: Sequelize.STRING,
      allowNull: false,
   },

},
   {
      freezeTableName: true,
      timestamps: false
   })
module.exports = Set
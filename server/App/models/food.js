// id,name,price,description,category,isChecked
const Sequelize = require('sequelize')
const Food = (sequelize) => sequelize.define('food', {
   name: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   price: {
      type: Sequelize.DECIMAL,
      allowNull: false,
   },
   description: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   category: {
      type: Sequelize.STRING,
      allowNull: false,
   }
},
   {
      freezeTableName: true,
      timestamps: false
   })
module.exports = Food
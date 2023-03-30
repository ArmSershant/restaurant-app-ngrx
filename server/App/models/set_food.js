const Sequelize = require('sequelize')
const Set_food = (sequelize) => sequelize.define('Set_food', {
   setId: {
      type: Sequelize.INTEGER,
      allowNul: false,
      references: {
         model: 'set',
         key: 'id'
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
   },
   foodId: {
      type: Sequelize.INTEGER,
      allowNul: false,
      references: {
         model: 'food',
         key: 'id'
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
   }
},
   {
      freezeTableName: true,
      timestamps: false
   })
module.exports = Set_food
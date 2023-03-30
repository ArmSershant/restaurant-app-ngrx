const Sequelize = require('sequelize');
const sequelize = new Sequelize('restaurant_app_db', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost',
  password: 'password'
})

const Food = require('../models/food')(sequelize);
const Set = require('../models/set')(sequelize);
const Set_food = require('../models/set_food')(sequelize);
const User = require('../models/user')(sequelize);

Set.belongsToMany(Food, { through: 'Set_food' });

sequelize.sync()
module.exports = { sequelize, Food, Set, Set_food, User }

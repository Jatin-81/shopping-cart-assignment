const Sequelize = require('sequelize');
const database = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname+'/../Database/ShopCart.db'
  });
module.exports={
    database,Sequelize
}
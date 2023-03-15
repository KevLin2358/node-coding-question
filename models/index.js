const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('coding', 'postgres', '12358', {
    host: 'localhost',
    dialect: "postgres"
  });

sequelize.authenticate().then(() => {
    console.log(`Database connected to discover`);
}).catch((err) => {
    console.log(err);
})


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./userModel') (sequelize, DataTypes);
db.posts = require('./postModel') (sequelize, DataTypes);

module.exports = db;
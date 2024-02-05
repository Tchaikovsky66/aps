const Sequelize = require('sequelize');

const sequelize = new Sequelize('your_databse', 'username', 'passwd', {
  host: 'local_host',
  dialect: 'mysql',
  port: '3306'
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

module.exports = sequelize;


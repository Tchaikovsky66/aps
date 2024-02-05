const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'shi', 'Swt1029384756@', {
  host: 'platos.phaedo.top',
  dialect: 'mysql',
  port: '33060'
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error_swt: ' + err))

module.exports = sequelize;


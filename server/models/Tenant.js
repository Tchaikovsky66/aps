const Sequelize = require('sequelize');
const db = require('../config/database');

const Tenant = db.define('tenant', {
  name: {
    type: Sequelize.STRING
  },
  contact: {
    type: Sequelize.STRING
  },
  // 其他需要的字段
  province: {
    type: Sequelize.STRING
},
  region: {
    type: Sequelize.STRING
  },
});

// 自动创建数据库表
db.sync()
  .then(() => console.log('Tenant table has been created, if one did not exist'))
  .catch(error => console.log('This error occured', error));

module.exports = Tenant;

 

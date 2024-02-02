const express = require('express');
const tenantController = require('../controllers/tenantController');
const router = express.Router();

// 创建租户
router.post('/', tenantController.createTenant);

// 获取租户
router.get('/:id', tenantController.getTenant);
router.get('/name/:name', tenantController.getTenantByName);


// 更新租户
//router.put('/tenant/:id', tenantController.updateTenant);
//router.put('/tenant/name/:name', tenantController.updateTenant);

// 删除租户
router.delete('/:id', tenantController.deleteTenant);
//router.delete('/tenant/name/:name', tenantController.deleteTenant);

module.exports = router;


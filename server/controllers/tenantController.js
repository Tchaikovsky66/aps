const Tenant = require('../models/Tenant');

exports.createTenant = async (req, res) => {
  try {
    const tenant = await Tenant.create(req.body);
    res.json(tenant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 其他CRUD操作
//获取租户信息id&name

exports.getTenant = async (req, res) => {
  try {
    const tenant = await Tenant.findByPk(req.params.id);
    if (!tenant) {
      return res.status(404).json({ error: 'Tenant not found' });
    }
    res.json(tenant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getTenantByName = async (req, res) => {
  try {
    const tenant = await Tenant.findAll({ where: { name: req.params.name } });
    if (!tenant) {
      return res.status(404).json({ error: 'Tenant not found' });
    }
    res.json(tenant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//删除
exports.deleteTenant = async (req, res) => {
  try {
    const tenant = await Tenant.findByPk(req.params.id);
    if (!tenant) {
      return res.status(404).json({ error: 'Tenant not found' });
    }
    await tenant.destroy();
    res.json({ message: 'Tenant deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

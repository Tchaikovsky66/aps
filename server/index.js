const express = require('express');
const tenantRoutes = require('./routes/tenantRoutes');
const app = express();
const port = 3001;

app.use(express.json()); // 解析 JSON 请求体

// 导入路由
app.use('/tenant', tenantRoutes);

app.use(function (req, res) {
  res.send('404 not found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


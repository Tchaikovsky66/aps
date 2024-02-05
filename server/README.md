
## 第一次使用

### 安装对应库
~~~
$ cd ./aps/server
$ npm install 
~~~

### 修改数据库地址

~~~
$ vim /config/database.js
~~~

~~~
const sequelize = new Sequelize('your_databse', 'username', 'passwd', {
  host: 'your_host',
  dialect: 'mysql',
});
~~~

### 测试server
~~~
$ cd ./aps/server
$ node index.js
~~~

## future
1.controller完善
2.数据库备份

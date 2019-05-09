//app.js文件

//1.引入express模块
const express = require('express')
const recipe = require('./router/recipe')
//2.创建app对象
const app = express()

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//定义简单路由
app.use('/api',recipe)
app.use('/',(req,res) => {
  res.send('Yo!')
})
// app.use('/api',recipe)
//定义服务启动端口
app.listen(3000,() => {
    console.log('app listening on port 3000.')
})
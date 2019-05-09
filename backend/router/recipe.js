//引入express模块
const qs = require("qs");
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const Recipe = require("../models/recipe");

// 查询所有菜单
router.get("/recipe", (req, res) => {
  Recipe.find({})
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});


router.post("/addRecipe", (req, res) => {
  Recipe.create(qs.parse(req.body), (err, recipe) => {
    if (err) {
      res.json(err);
    } else {
      res.json(recipe);
    }
  });
});



module.exports = router;

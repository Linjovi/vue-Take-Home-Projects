//引入express模块
const qs = require("qs");
const querystring = require("querystring");
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
      res.json(err);
    });
});


router.post("/saveRecipe", (req, res) => {
  req.on("data", function (data) {//监听数据过来
    var recipe = querystring.parse(decodeURIComponent(data));//转成object对象，方便使用
    Recipe.findById(recipe.id).then(item => {
      if (item) {
        Recipe.findOneAndUpdate(
          { _id: recipe.id },
          {
            $set: {
              name: recipe.name,
              ingredients: recipe.ingredients,
              directions: recipe.directions
            }
          },
          {
            new: true
          }, (err) => {
            if (err) {
              res.json(err);
            } else {
              res.json(recipe);
            }
          }
        );
      } else {
        Recipe.create(recipe, (err) => {
          if (err) {
            res.json(err);
          } else {
            res.json(recipe);
          }
        });
      }
    }).catch()
  });
});

router.delete("/delRecipe/:id", (req, res) => {
  console.log(req.params)
  Recipe.findOneAndDelete({
    _id: req.params.id
  }).then(res.send(req.params.id))
    .catch(err => res.json(err));
});


module.exports = router;

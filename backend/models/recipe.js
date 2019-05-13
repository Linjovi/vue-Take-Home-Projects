//引入mongoose模块
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test',{ useNewUrlParser: true })
//定义数据模型
const recipeSchema = mongoose.Schema({
  name :String,
  ingredients : String,
  directions : String
}, { collection: 'myRecipe'})
//这里mongoose.Schema最好要写上第二个参数，明确指定到数据库中的哪个表取数据。这里不写第二个参数的话，后面你会遇到坑。

//导出model模块
const Recipe = module.exports = mongoose.model('recipe',recipeSchema);

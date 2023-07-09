const {Category} = require("../../models")

const getCategoryList = async(req, res)=>{
  const result = await Category.find().sort({ name: 1 });
  const categoryName = result.map(item =>item.name);
  res.json(categoryName);
}

module.exports= getCategoryList;


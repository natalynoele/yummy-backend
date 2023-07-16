const {RecipeService} = require("../../services")

const getCategoryList = async(req, res)=>{
  const result = await RecipeService.getCategoryList()
  res.json(result);
}

module.exports= getCategoryList;


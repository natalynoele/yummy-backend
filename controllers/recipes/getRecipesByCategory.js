const {RecipeService} = require("../../services")

const getRecipesByCategory = async (req, res, next) => {
  try{   
    const categoryByName = await RecipeService.getRecipesByCategory(req);
    res.status(200).json(categoryByName);
  }
  catch (err) {
    next(err);
  }
};

module.exports = getRecipesByCategory;

const { Recipe } = require("../../models");

const getRecipesByCategory = async (req, res, next) => {
  try {
    const category = req.query.category;
    const categoryByName = await Recipe.find({ category: category }).limit(8);

    console.log(categoryByName);

    res.status(200).json(categoryByName);
  } catch (err) {
    next(err);
  }
  
};

module.exports = getRecipesByCategory;

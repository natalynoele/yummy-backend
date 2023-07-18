const { Recipe, Category, Ingredients } = require("../../models");
const { HttpError } = require("../../helpers");

class RecipeService {
  async getByIdRecipe(req) {
    try {
      const { id } = req.params;
      const result = await Recipe.findOne({ _id: id });
      if (!result) {
        throw HttpError(404, "Not found");
      }
      return result;
    } catch (error) {
      return error;
    }
  }

  async getCategoryList(res) {
    const result = await Category.find().sort({ name: 1 });
    const categoryName = result.map((item) => item.name);
    return categoryName;
  }

  async getRecipesByCategory(req, res, next) {
    const category = req.params.category;

    const categoryByName = await Recipe.find({ category: category }).limit(8);

    return categoryByName;
  }

  async mainPage() {
    const limitNumber = 4;

    const breakfast = await Recipe.find({ category: "Breakfast" }).limit(
      limitNumber
    );
    const miscellaneous = await Recipe.find({
      category: "Miscellaneous",
    }).limit(limitNumber);
    const chicken = await Recipe.find({ category: "Chicken" }).limit(
      limitNumber
    );
    const dessert = await Recipe.find({ category: "Dessert" }).limit(
      limitNumber
    );

    return { breakfast, miscellaneous, chicken, dessert };
  }

  async searchByIngredients(ingredients) {
    const ingredient = await Ingredients.findOne({ name: ingredients });

    // console.log(ingredient._id, 'service');
    const result = await Recipe.find({
      ingredients: {
        $elemMatch: {
          id: ingredient._id.toString(),
        },
      },
    });

    // console.log(result, "service");

    return result;
  }

  async searchByTitle(title) {
    const regex = { title: { $regex: title, $options: "i" } };

    const searchRecipe = await Recipe.find(regex);

    if (searchRecipe.length === 0) {
      throw HttpError(404, "recipe not found");
    }
    return searchRecipe;
  }
}

module.exports = new RecipeService();

const { Recipe, Category} = require("../../models");
const { HttpError } = require("../../helpers");

class RecipeService {
    async getByIdRecipe(req, res) {
        try{
            const { id } = req.params;
            const result = await Recipe.findOne({ _id: id });
    if (!result) {
      return res.status(404).json({ message: "Not found" });
    }
    return result;
  }
    catch (error) {
      return res.status(404).json({ message: "Invalid Id" });
    }        
}

 async getCategoryList (res){
    const result = await Category.find().sort({ name: 1 });
    const categoryName = result.map(item =>item.name);
    return categoryName;
 }

 async getRecipesByCategory(req, res, next){

      const category = req.params.category;
  
      const categoryByName = await Recipe.find({ category: category }).limit(8);
  
      return categoryByName;

}

async mainPage ()  {
    const limitNumber = 4;
  
    const breakfast = await Recipe.find({ category: "Breakfast" }).limit(
      limitNumber
    );
    const miscellaneous = await Recipe.find({ category: "Miscellaneous" }).limit(
      limitNumber
    );
    const chicken = await Recipe.find({ category: "Chicken" }).limit(limitNumber);
    const dessert = await Recipe.find({ category: "Dessert" }).limit(limitNumber);
  
    return ({ breakfast, miscellaneous, chicken, dessert });
}

async searchByIngredients  (id) {
    const result = await Recipe.find({
      ingredients: {
        $elemMatch: {
          id: id,
        },
      },
    });
  
    return result;
  };

 async searchByTitle (title) {
    
      const regex ={title: { $regex: title, $options: 'i' } }

    const searchRecipe = await Recipe.find(regex);

    if (searchRecipe.length === 0) {
      throw HttpError(404, "recipe not found");
    }
    return searchRecipe;
}
}

module.exports = new RecipeService();
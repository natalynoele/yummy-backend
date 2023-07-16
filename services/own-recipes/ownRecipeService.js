const { Recipe } = require("../../models");


class OwnRecipeService {
    async addRecipes(recipeData) {
      
        const newRecipe = await Recipe.create({ ...recipeData });
        return newRecipe;
}

async deleteRecipe(id){
    const deleteRecipe = await Recipe.findOneAndRemove({ _id: id });
   return deleteRecipe;
}

// async getRecipeByUserId(owner){
//     const result = await Recipe.find(owner);
//     return result;
// }
}

module.exports = new OwnRecipeService();
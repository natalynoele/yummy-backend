const {OwnRecipeService} = require("../../services")
const { HttpError } = require("../../helpers");

const deleteRecipe = async (req, res) => {
  const { id } = req.params;
const result = await OwnRecipeService.deleteRecipe(id);
  // const deleteRecipe = await Recipe.findOneAndRemove({ _id: id });
  if (!result) {
    throw new HttpError(404, `Recipe with id ${id} not found`);
  }
  res.status(200).json({ message: "Recipe has deleted" });
};

module.exports = deleteRecipe;

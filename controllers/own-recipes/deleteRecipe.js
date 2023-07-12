const {HttpError} = require("../../helpers")
const {Recipe} = require("../../models");

const deleteRecipe = async(req, res)=>{
    const { id } = req.params;
    const deleteRecipe = await Recipe.findOneAndRemove({ _id: id });
    if (!deleteRecipe) {
        throw new HttpError(`recipe with id ${id} not found`);
    }
    return res.status(200).json({ message: "Recipe has deleted" });
}

module.exports = deleteRecipe;
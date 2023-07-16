const {RecipeService} = require("../../services")

const getById = async (req, res) => {

    const result = await RecipeService.getByIdRecipe(req,res);
 
    res.json(result);

};

module.exports = getById;

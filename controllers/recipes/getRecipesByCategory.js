const {Recipe} = require("../../models/recipes")

const getRecipesByCategory = async(req, res, next) =>{
    try{
        const category = req.params.category;
    const categoryByName= await Recipe.find({ 'category': category }).limit(8);
    res.json(categoryByName);
    }
    catch(err){
        next(err);
        }
}

module.exports = getRecipesByCategory;

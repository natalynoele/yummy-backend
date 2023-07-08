const {Recipe} = require("../../models/recipes")

const mainPage = async(req, res) =>{
    const limitNumber = 4;
    const breakfast = await Recipe.find({ 'category': 'Breakfast' }).limit(limitNumber);
    const miscellaneous = await Recipe.find({ 'category': 'Miscellaneous' }).limit(limitNumber);
    const chicken = await Recipe.find({ 'category': 'Chicken' }).limit(limitNumber);
    const dessert = await Recipe.find({ 'category': 'Dessert' }).limit(limitNumber);

    res.json({ breakfast, miscellaneous, chicken, dessert})
}

module.exports = mainPage;
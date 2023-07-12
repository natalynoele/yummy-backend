const { Recipe } = require("../../models");
const { HttpError } = require("../../helpers");

const searchByTitle = async(req,res) =>{
        const {title}  = req.body;
        const titleSearch = title.trim();
        if (titleSearch === '') {
            throw new HttpError(400, `Empty search fild`);
          }
          const regex ={title: { $regex: title, $options: 'i' } }

        const searchRecipe = await Recipe.find(regex);

        if (searchRecipe.length === 0) {
          throw HttpError(404, "recipe not found");
        }
        return res.json(searchRecipe);
      
}

module.exports = searchByTitle;
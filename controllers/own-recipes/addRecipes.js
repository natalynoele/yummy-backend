const { OwnRecipeService } = require("../../services");

const addRecipes = async (req, res) => {

    const { _id: owner } = req.user;

    let recipePreview;


    if (req.file) {
        recipePreview = req.file.path;
    } else {
        recipePreview =
            "https://res.cloudinary.com/dvmiapyqk/image/upload/v1688894039/1_jyhhh3.png";
    }

    const recipeData = {
        ...req.body,
        preview: recipePreview,
        thumb: recipePreview,
        owner,
    };
    const newRecipe = await OwnRecipeService.addRecipes(recipeData);
    res.status(201).json(newRecipe);
};

module.exports = addRecipes;

const { RecipeService } = require("../../services");
const { HttpError } = require("../../helpers");

const searchByTitle = async (req, res) => {
  const { title } = req.query;
  const titleSearch = title.trim();
  if (titleSearch === "") {
    throw new HttpError(400, `Empty search fild`);
  }
  const result = await RecipeService.searchByTitle(title);
  return res.json(result);
};

module.exports = searchByTitle;

const {Recipe} = require("../../models/recipes")

const categoryList = [
  'Pasta',
  'Beef',
  'Breakfast',
  'Miscellaneous',
  'Chicken',
  'Dessert',
  'Vegan',
  'Goat',
  'Lamb',
  'Pork',
  'Seafood',
  'Side',
  'Starter',
  'Vegetarian',
]

const getById = async (req, res) => {
    try{
      const {id} = req.params;
      const result = await Recipe.findOne({_id: id});
      if(!result){
        return res.status(404).json({ message: "Not found1" });
      }
      res.json(result);
   
    }
    catch(error) {
      return res.status(404).json({ message: "Invalid Id" });
    }
  }

const getCategoryList = async(req, res) =>{
    try{
       const categories = [...categoryList].sort();
       res.json(categories);
    }
    catch(error) {
        return res.status(404).json({ message: "Not found category" });
      }
}

  module.exports = {
    getById,
    getCategoryList,
}
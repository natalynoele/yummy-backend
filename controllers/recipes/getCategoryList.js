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

  const getCategoryList = async(req, res) =>{
    try{
       const categories = [...categoryList].sort();
       res.json(categories);
    }
    catch(error) {
        return res.status(404).json({ message: "Not found category" });
      }
}

module.exports= getCategoryList;
const { Ingredients } = require("../../models");

class IngredientsService {
    async getAll() {
        const result = await Ingredients.find();
        return result;
    }
}

module.exports = new IngredientsService();
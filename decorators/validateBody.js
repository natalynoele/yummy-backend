const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    console.log(schema.validate(req.body));

    const { error } = schema.validate(req.body);

    if (error) {
      next(HttpError(400, error.message));
    }
    next(error);
  };

  return func;
};

module.exports = validateBody;

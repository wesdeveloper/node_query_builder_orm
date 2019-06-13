const Joi = require("joi");

const id = Joi.string().uuid();

const schemas = {
  id: Joi.object({ id: id.required() })
};

module.exports = { schemas };

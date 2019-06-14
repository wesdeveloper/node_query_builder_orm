const Joi = require("joi");

const id = Joi.string().uuid();
const text = Joi.string();

const schemas = {
  id: Joi.object({ id: id.required() }),
  post: Joi.object({
    user_id: id.required(),
    title: text.required(),
    description: text.required()
  })
};

module.exports = { schemas };

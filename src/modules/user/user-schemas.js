const Joi = require("joi");

const id = Joi.string().uuid();
const text = Joi.string();

const schemas = {
  id: Joi.object({ id: id.required() }),
  user: Joi.object({
    id,
    name: text.required(),
    cpf: text.regex(/^\d{11}$/).required(),
    password: text.required(),
    estate: text.regex(/^\w{2}$/).required(),
    email: text.email().required(),
    phone: text.regex(/^\d{11}$/).required()
  })
};

module.exports = { schemas };

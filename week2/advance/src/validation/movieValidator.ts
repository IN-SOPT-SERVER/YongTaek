import Joi from "joi";

export const filterAddMovie = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().required(),
    audience: Joi.number().required()
}).options({ stripUnknown: true });

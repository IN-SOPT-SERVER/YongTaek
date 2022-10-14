import Joi from "joi";

export const filterAddPost = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required()
}).options({ stripUnknown: true });

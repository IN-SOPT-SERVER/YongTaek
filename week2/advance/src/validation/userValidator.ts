import Joi from "joi";

export const filterMe = Joi.object({
    userId: Joi.string().required()
}).options({ stripUnknown: true });

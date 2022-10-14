import Joi from "joi";

export const filterAddMember = Joi.object({
    name: Joi.string().required(),
    group: Joi.string().required(),
    menu: Joi.string().required()
}).options({ stripUnknown: true });

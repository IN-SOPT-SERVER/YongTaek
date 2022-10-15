import Joi from "joi";

export const filterGetComment = Joi.object({
    movieId: Joi.number().required()
}).options({ stripUnknown: true });

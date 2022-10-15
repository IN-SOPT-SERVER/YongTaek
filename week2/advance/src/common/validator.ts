import { NextFunction, Request, Response } from "express";
import Joi from "joi";
/**
  * Validate request body
  *
  * @param {object} schema joi schema
  */
 export const body = (schema: Joi.Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);
    if (error !== undefined) {
        let errorMessage = error.details.map((x) => x.message).join(', ');

        return res.status(422).send(errorMessage);
    }

    req.body = value;
    next();
};

/**
 * Validate request query string
 *
 * @param {object} schema joi schema
 */
export const query = (schema: Joi.Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.query);
    if (error !== undefined) {
        let errorMessage = error.details.map((x) => x.message).join(', ');

        return res.status(422).send(errorMessage);
    }

    req.query = value;
    next();
};

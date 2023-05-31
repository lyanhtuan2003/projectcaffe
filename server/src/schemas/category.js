import joi from "joi";
export const categorySchemas = joi.object({
    name: joi.string().required()
});


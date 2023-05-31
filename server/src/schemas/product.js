import joi from "joi";
export const productSchemas = joi.object({
    name: joi.string().required(),
    image: joi.string(),
    price: joi.number().required(),
    describe: joi.string(),
    categoryId: joi.string().required()
});


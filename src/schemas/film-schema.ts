import joi from 'joi';

const filmSchema = joi.object({
    name: joi.string().required(),
    score: joi.number().required()
});

export default filmSchema;
// api/controllers/cabinController.js

const Joi = require('joi');
const cabins = require('../data/cabins');

const getCabins = (req, res, next) => {
  const schema = Joi.object({
    city: Joi.string().optional(),
  });

  const { error, value } = schema.validate(req.query);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { city } = value;

  try {
    if (city) {
      const filteredCabins = cabins.filter(cabin => cabin.city.toLowerCase() === city.toLowerCase());
      res.status(200).json(filteredCabins);
    } else {
      res.status(200).json(cabins);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCabins,
};

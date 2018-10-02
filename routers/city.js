const cityRouter = require('express').Router();
const {getCities, getCityById, addCity, updateCityById} = require('../controllers/cities');

cityRouter.route('/')
    .get(getCities)
    .post(addCity);

cityRouter.route('/:city_id')
    .get(getCityById)
    .put(updateCityById)

module.exports = cityRouter;
const cityRouter = require('express').Router();
const {getCities, getCityById, addCity, updateCityById} = require('../controllers/cities');
const {getAreas, addArea} = require('../controllers/areas');

cityRouter.route('/')
    .get(getCities)
    .post(addCity);

cityRouter.route('/:city_id')
    .get(getCityById)
    .put(updateCityById)

cityRouter.route('/:city_id/areas')
    .get(getAreas)
    .post(addArea);

module.exports = cityRouter;
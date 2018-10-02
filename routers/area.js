const areaRouter = require('express').Router();
const {getAreas, addArea} = require('../controllers/areas');

areaRouter.route('/')
    .get(getAreas)
    .post(addArea);

module.exports = areaRouter;
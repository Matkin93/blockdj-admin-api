const areaRouter = require('express').Router();
const {getAreaById, updateAreaById} = require('../controllers/areas');

areaRouter.route('/:area_id')
    .get(getAreaById)
    .put(updateAreaById)

module.exports = areaRouter;
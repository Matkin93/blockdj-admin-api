const apiRouter = require('express').Router();
const cityRouter = require('./city');
const areaRouter = require('./area');

apiRouter.route('/')
    .get((req, res, next) => {
        res.status(200).send('testing')
    });

apiRouter.use('/cities', cityRouter);
apiRouter.use('/areas', areaRouter);
    
module.exports = apiRouter;
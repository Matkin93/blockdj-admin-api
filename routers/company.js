const companyRouter = require('express').Router();
const {getCompanies} = require('../controllers/companies');

companyRouter.route('/')
    .get(getCompanies)

module.exports = companyRouter;
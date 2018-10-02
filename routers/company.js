const companyRouter = require('express').Router();
const {getCompanies, addCompany} = require('../controllers/companies');

companyRouter.route('/')
    .get(getCompanies)
    .post(addCompany)

module.exports = companyRouter;
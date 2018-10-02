const {Company} = require('../models');
 
module.exports.getCompanies = (req, res, next) => {
    Company.find({})
        .then(companies => {
            res.status(200).send({companies});
        })
        .catch(err => next(err));
}


module.exports.addCompany = (req, res, next) => {
    Company.create({...req.body})
        .then(company => {
            res.status(200).send({company})
        })
        .catch(err => next(err));
}
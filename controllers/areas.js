const {Area} = require('../models');

module.exports.getAreas = (req, res, next) => {
    Area.find({})
        .then(areas => {
            res.status(200).send({areas});
        })
        .catch(err => next(err));
 }

 module.exports.addArea = (req, res, next) => {
    Area.create({...req.body})
        .then(area => {
            res.status(200).send({area});
        })    
        .catch(err => next(err));     
 }
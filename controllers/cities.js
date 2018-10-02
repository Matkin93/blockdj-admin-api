 const {City} = require('../models');
 
 module.exports.getCities = (req, res, next) => {
    City.find({})
        .then(cities => {
            res.status(200).send({cities});
        })
        .catch(err => next(err));
 }

 module.exports.addCity = (req, res, next) => {
    City.create({...req.body})
        .then(city => {
            res.status(200).send({city});
        })    
        .catch(err => next(err));
 }

 module.exports.getCityById = (req, res, next) => {
     City.findById(req.params.city_id)
        .then(city => {
            res.status(200).send({city});
        })
        .catch(err => next(err));
}

module.exports.updateCityById = (req, res, next) => {
    City.findOneAndUpdate({_id: req.params.city_id}, {name: req.body.name}, {new: true})
        .then(city => {
            res.status(200).send({city})
        })
        .catch(err => next(err));
}
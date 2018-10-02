const {Area} = require('../models');

module.exports.getAreas = (req, res, next) => {
    Area.find({city: req.params.city_id})
        .then(areas => {
            res.status(200).send({areas});
        })
        .catch(err => next(err));
 }

 module.exports.addArea = (req, res, next) => {
    Area.create({city: req.params.city_id, ...req.body})
        .then(area => {
            res.status(200).send({area});
        })    
        .catch(err => next(err));     
 }

 module.exports.getAreaById = (req, res, next) => {
    Area.findById(req.params.area_id)
       .then(area => {
           res.status(200).send({area});
       })
       .catch(err => next(err));
}

 module.exports.updateAreaById = (req, res, next) => {
    Area.findOneAndUpdate({_id: req.params.area_id}, {...req.body}, {new: true})
        .then(area => {
            res.status(200).send({area})
        })
        .catch(err => next(err));

 }
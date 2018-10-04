const mongoose = require('mongoose');
const {City, Area, Company } = require('../models');
const {createRefObj, formatAreaData} = require('../utils');

const seedDB = (cities, areas, companies ) => {
    return mongoose.connection.dropDatabase()
        .then(() => {
            return Promise.all([
                City.insertMany(cities),
                Company.insertMany(companies)
            ]);
        }) 
        .then(([cityDocs, companyDocs]) => {
            const cityRefs = createRefObj(cities, cityDocs, 'name', '_id');
            return Promise.all([
                cityDocs,
                companyDocs,
                Area.insertMany(formatAreaData(areas, cityRefs))
            ]);
        })
        .catch(console.log);
}

module.exports = seedDB;
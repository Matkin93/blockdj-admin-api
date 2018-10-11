const mongoose = require('mongoose');
const seedDB = require('./seed');
const {DB_URL = require('../config').DB_URL} = process.env;
const {SEED_PATH = require('../config').SEED_PATH} = process.env;

const {cities, areas, companies} = require(SEED_PATH);

mongoose.connect(DB_URL, {useNewUrlParser: true})
    .then(() => {
        console.log(`Connected to ${DB_URL}...`);
        return seedDB(cities, areas, companies);
    })
    .then(([cityDocs, areaDocs, companyDocs]) => {
        console.log(`Finished seeding data to ${DB_URL}`);
    })
    .then(() => {
        return mongoose.disconnect();
    })
    .then(() => {
        console.log(`Disconnected from ${DB_URL}...`)
    })
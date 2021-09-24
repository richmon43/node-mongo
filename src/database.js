const mongoose = require('mongoose');

const { HOST, DATABASE } = process.env;
const MONGODB_URL = `mongodb://${HOST}/${DATABASE}`;

mongoose.connect(MONGODB_URL, {
    })
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
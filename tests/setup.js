require('../models/User');

jest.setTimeout(30000);

const mongoose = require('mongoose');
const { mongoURI } = require('../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, {
    useMongoClient: true
});

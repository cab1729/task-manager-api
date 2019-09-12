const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_STR, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connecting to MongoDB");
    })
    .catch(e => console.log(e));

module.exports = mongoose;
const app = require('./app');
const http = require('http').createServer(app);
require('./database');
require('dotenv').config();

http.listen(process.env.PORT || 8080, () => {
    console.log('Server is listening to port : ' + process.env.PORT || 8080);
})
var mongoose = require('mongoose');
const mongodb_uri = process.env.MONGODB_URI || 'mongodb://db:27017/TodoApp';
mongoose.promise = global.promise;
mongoose.connect(mongodb_uri, {useNewUrlParser: true});
console.log(`Database: ${mongodb_uri}`);
//gPTOTOIXh7qnh9j8
//node-user
module.exports = {mongoose};

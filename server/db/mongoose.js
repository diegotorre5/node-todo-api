var mongoose = require('mongoose');
const mongodb_uri = process.env.MONGODB_URI || 'mongodb://db:27017/TodoApp';
mongoose.promise = global.promise;
mongoose.connect(mongodb_uri, {useNewUrlParser: true, useUnifiedTopology: true});
console.log(`Database: ${(process.env.MONGODB_URI) ? 'mongo-atlas-heroku' : 'local' }`);
//gPTOTOIXh7qnh9j8
//node-user
module.exports = {mongoose};

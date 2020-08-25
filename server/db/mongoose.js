var mongoose = require('mongoose');
mongoose.promise = global.promise;
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
console.log(`Database: ${(process.env.MONGODB_URI)}`);
//gPTOTOIXh7qnh9j8
//node-user
module.exports = {mongoose};

var mongoose = require('mongoose');
mongoose.promise = global.promise;
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
var dbToShow = process.env.MONGODB_URI;

console.log(`Database: ${(dbToShow.replace(dbToShow.substring(dbToShow.search('//'),dbToShow.search('@')),'//****:*****'))}`);
//gPTOTOIXh7qnh9j8
//node-user
module.exports = {mongoose};

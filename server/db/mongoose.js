var mongoose = require('mongoose');
mongoose.promise = global.promise;
mongoose.connect('mongodb://db:27017/TodoApp');

module.exports = {mongoose};


var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var BearSchema   = new Schema({
	name: String,
	price: Number,
	quantity: Number
});

module.exports = mongoose.model('Bear', BearSchema);
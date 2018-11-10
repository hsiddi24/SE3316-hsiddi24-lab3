
var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var PhoneSchema   = new Schema({
	name: String,
	price: Number,
	tax: Number,
	quantity: Number
});

module.exports = mongoose.model('Phone', PhoneSchema);
const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const mongoSchema = new Schema({ 
  name: { type: String, require: true, unique: true },
  amount: { type: Number }
});

module.exports = mongoose.model('winners', mongoSchema);
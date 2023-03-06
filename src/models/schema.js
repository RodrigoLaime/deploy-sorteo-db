'use strict'

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mongoSchema = new Schema({
  name: String,
});

module.exports = mongoose.model('winners', mongoSchema);
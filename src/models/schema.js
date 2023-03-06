'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema; //

const mongoSchema = new Schema({ //
  name: String,
});

module.exports = mongoose.model('winners', mongoSchema);
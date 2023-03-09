'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema; //

const mongoSchema = new Schema({ //
  name: { type: String, require: true },
  amount: { type: Array }
});

module.exports = mongoose.model('winners', mongoSchema);
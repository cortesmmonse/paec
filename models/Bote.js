// models/Bote.js
const mongoose = require('mongoose');

const boteSchema = new mongoose.Schema({
  tipo: { type: String, default: 'bote' },
  ubicacion: String,
  reciclaje: String
}, { collection: 'PAEC' });

module.exports = mongoose.model('Bote', boteSchema);

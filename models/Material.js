// models/Material.js
const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  tipo: { type: String, default: 'material' },
  material: String,
  reciclaje: String
}, { collection: 'PAEC' });

module.exports = mongoose.model('Material', materialSchema);

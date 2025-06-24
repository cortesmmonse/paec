const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  tipo: { type: String, default: 'material' },
  material: String,
  reciclaje: String // opcional si no se usa
}, { collection: 'PAEC' });

module.exports = mongoose.model('Material', materialSchema);

const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  tipo: String,         // Ej: plástico, papel, etc.
  material: String      // Nombre específico del material
}, { collection: 'PAEC' });

module.exports = mongoose.model('Material', materialSchema);

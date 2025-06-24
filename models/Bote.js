const mongoose = require('mongoose');

const boteSchema = new mongoose.Schema({
  tipo: String,          // Tipo de reciclaje del bote (plástico, etc.)
  ubicacion: String      // Ubicación del bote
}, { collection: 'PAEC' });

module.exports = mongoose.model('Bote', boteSchema);

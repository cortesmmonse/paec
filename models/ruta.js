const mongoose = require('mongoose');

const rutaSchema = new mongoose.Schema({
  zona: String,
  hora: String,           // HH:MM
  descripcion: String
}, { collection: 'PAEC' });

module.exports = mongoose.model('Ruta', rutaSchema);

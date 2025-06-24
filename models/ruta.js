const mongoose = require('mongoose');

const rutaSchema = new mongoose.Schema({
  zona: String,
  hora: String,
  descripcion: String
});

module.exports = mongoose.model('Ruta', rutaSchema);

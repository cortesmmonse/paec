const mongoose = require('mongoose');

const participanteSchema = new mongoose.Schema({
  tipo: { type: String, default: 'participante' },
  nombre: String,
  rol: String,
  kilos: Number,
  fecha: String,
  lugar: String
}, { collection: 'PAEC' });

module.exports = mongoose.model('Participante', participanteSchema);

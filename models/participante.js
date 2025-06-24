const mongoose = require('mongoose');

const participanteSchema = new mongoose.Schema({
  tipo: { type: String, default: 'participante' }, // No es necesario, pero si lo usas para identificar tipo, lo dejamos
  nombre: String,
  rol: String,           // estudiante, docente, administrativo
  kilos: Number,
  fecha: String,         // AAAA-MM-DD
  lugar: String
}, { collection: 'PAEC' });

module.exports = mongoose.model('Participante', participanteSchema);

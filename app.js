const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Modelos
const Bote = require('./models/Bote');
const Material = require('./models/Material');
const Participante = require('./models/participante');
const Ruta = require('./models/ruta');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Servir HTML desde /public


app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});


// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar:', err));

// Rutas

// Botes
app.post('/api/botes', async (req, res) => {
  try {
    const bote = new Bote(req.body);
    await bote.save();
    res.json(bote);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar el bote' });
  }
});

// Materiales
app.post('/api/materiales', async (req, res) => {
  try {
    const material = new Material(req.body);
    await material.save();
    res.json(material);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar el material' });
  }
});

// Participantes
app.post('/api/participantes', async (req, res) => {
  try {
    const participante = new Participante(req.body);
    await participante.save();
    res.json(participante);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar el participante' });
  }
});

// Rutas de recolección
app.post('/api/rutas', async (req, res) => {
  try {
    const ruta = new Ruta(req.body);
    await ruta.save();
    res.json(ruta);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar la ruta' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

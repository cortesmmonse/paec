const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Modelos
const Bote = require('./models/Bote');
const Material = require('./models/Material');
const Participante = require('./models/Participante');
const Ruta = require('./models/Ruta');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Servir archivos desde /public

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error al conectar:', err));


// ======= RUTAS SIN /api ======= //

// BOTES
app.post('/botes', async (req, res) => {
  try {
    const bote = new Bote(req.body);
    await bote.save();
    res.json(bote);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar el bote' });
  }
});

app.get('/botes', async (req, res) => {
  try {
    const botes = await Bote.find();
    res.json(botes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los botes' });
  }
});


// MATERIALES
app.post('/materiales', async (req, res) => {
  try {
    const material = new Material(req.body);
    await material.save();
    res.json(material);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar el material' });
  }
});

app.get('/materiales', async (req, res) => {
  try {
    const materiales = await Material.find();
    res.json(materiales);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los materiales' });
  }
});


// PARTICIPANTES
app.post('/participantes', async (req, res) => {
  try {
    const participante = new Participante(req.body);
    await participante.save();
    res.json(participante);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar el participante' });
  }
});

app.get('/participantes', async (req, res) => {
  try {
    const participantes = await Participante.find();
    res.json(participantes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los participantes' });
  }
});


// RUTAS DE RECOLECCIÓN
app.post('/rutas', async (req, res) => {
  try {
    const ruta = new Ruta(req.body);
    await ruta.save();
    res.json(ruta);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar la ruta' });
  }
});

app.get('/rutas', async (req, res) => {
  try {
    const rutas = await Ruta.find();
    res.json(rutas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las rutas' });
  }
});


// Servidor en marcha
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

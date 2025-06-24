app.post('/api/rutas', async (req, res) => {
  try {
    const ruta = new Ruta(req.body);
    await ruta.save();
    res.json(ruta);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar la ruta' });
  }
});

app.get('/api/rutas', async (req, res) => {
  try {
    const rutas = await Ruta.find();
    res.json(rutas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las rutas' });
  }
});

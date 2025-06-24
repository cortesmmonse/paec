app.post('/api/materiales', async (req, res) => {
  try {
    const material = new Material(req.body);
    await material.save();
    res.json(material);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar el material' });
  }
});

app.get('/api/materiales', async (req, res) => {
  try {
    const materiales = await Material.find();
    res.json(materiales);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener materiales' });
  }
});

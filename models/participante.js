app.post('/api/participantes', async (req, res) => {
  try {
    const participante = new Participante(req.body);
    await participante.save();
    res.json(participante);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar el participante' });
  }
});

app.get('/api/participantes', async (req, res) => {
  try {
    const participantes = await Participante.find();
    res.json(participantes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los participantes' });
  }
});

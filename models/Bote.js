app.post('/api/botes', async (req, res) => {
  try {
    const bote = new Bote(req.body);
    await bote.save();
    res.json(bote);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar el bote' });
  }
});

app.get('/api/botes', async (req, res) => {
  try {
    const botes = await Bote.find();
    res.json(botes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los botes' });
  }
});

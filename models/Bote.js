// Obtener todos los botes
app.get('/api/botes', async (req, res) => {
  try {
    const botes = await Bote.find();
    res.json(botes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los botes' });
  }
});

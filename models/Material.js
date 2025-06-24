// Obtener todos los materiales
app.get('/api/materiales', async (req, res) => {
  try {
    const materiales = await Material.find();
    res.json(materiales);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener materiales' });
  }
});

const Task = require('../../models/Task');

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'ID de tarea no proporcionado.' });
    }

    // Buscar la tarea en la base de datos
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'La tarea no fue encontrada.' });
    }

    // Actualizar los campos de la tarea
    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;

    // Guardar los cambios en la base de datos
    await task.save();

    res.status(200).json({ message: 'Tarea actualizada exitosamente.', task });
  } catch (error) {
    console.error('Error en updateTask:', error);
    res.status(500).json({ error: 'Hubo un problema al actualizar la tarea.' });
  }
};

module.exports = updateTask;

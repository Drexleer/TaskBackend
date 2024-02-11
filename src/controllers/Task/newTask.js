const Task = require('../../models/Task');

const newTask = async (req, res) => {
  const { id, title, description, status } = req.body;

  try {
    const task = await Task.create({ title, description, status });
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = newTask;

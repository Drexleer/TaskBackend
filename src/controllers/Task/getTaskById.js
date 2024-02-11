const Task = require('../../models/Task');

const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);

    if (!task) return res.status(404).json({ msg: 'Task not found' });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = getTaskById;

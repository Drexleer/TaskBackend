const User = require('../../models/User');
const bcrypt = require('bcrypt');

const userRegister = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Check if user already exists
    let existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Hash of the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    res
      .status(201)
      .json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res
      .status(500)
      .json({ message: 'Error al crear usuario', error: error.message });
  }
};

module.exports = userRegister;

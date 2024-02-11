const User = require('../../models/User');
const bcrypt = require('bcrypt');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found', login: false });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: 'Invalid credentials', login: false });
    }
    res
      .status(200)
      .json({
        message: 'Login successful',
        login: true,
        email: user.email,
        username: user.username,
      });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = userLogin;

// controllers/authController.js

// Signup handler
const signup = (req, res) => {
  res.send("Signup controller working...");
};

// Login handler
const login = (req, res) => {
  res.send("Login controller working...");
};

// Test handler
const test = (req, res) => {
  res.send("Test route working...");
};

module.exports = {
  signup,
  login,
  test,
};

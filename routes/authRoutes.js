// routes/authRoutes.js
const express = require('express');
const { signup, login, test } = require('../controllers/authController');

const router = express.Router();

// Routes
router.post('/signup', signup);
router.post('/login', login);
router.get('/test', test);

module.exports = router;

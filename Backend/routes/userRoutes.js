const express = require('express');
const User = require('Backend/models/User');

const router = express.Router();

// Create User (Signup)
router.post('/signup', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;

const express = require('express');
const Budget = require('Backend/models/Budget');
const User = require('Backend/models/User');

const router = express.Router();

// Set Budget
router.post('/', async (req, res) => {
    try {
        const { userId, category, limit } = req.body;

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const budget = new Budget({ userId, category, limit });
        await budget.save();
        res.status(201).json(budget);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;

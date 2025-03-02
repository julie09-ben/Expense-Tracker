const express = require('express');
const Transaction = require('Backend/models/Transaction');
const User = require('Backend/models/User');

const router = express.Router();

// Add Transaction
router.post('/', async (req, res) => {
    try {
        const { userId, type, amount, category, date } = req.body;

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const transaction = new Transaction({ userId, type, amount, category, date });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;

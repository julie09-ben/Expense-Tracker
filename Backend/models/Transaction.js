const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: { type: String, enum: ['income', 'expense'], required: true },
    amount: Number,
    category: String,
    date: Date
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);

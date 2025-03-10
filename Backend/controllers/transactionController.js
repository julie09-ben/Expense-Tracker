const Transaction = require('Backend/models/Transaction');

const getTransactions = async (req, res) => {
    const transactions = await Transaction.find({ user: req.user.id });
    res.json(transactions);
};

const addTransaction = async (req, res) => {
    const { type, amount, category } = req.body;
    const transaction = new Transaction({ user: req.user.id, type, amount, category });
    await transaction.save();
    res.status(201).json(transaction);
};

const deleteTransaction = async (req, res) => {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: 'Transaction deleted' });
};

module.exports = { getTransactions, addTransaction, deleteTransaction };

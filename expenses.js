const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Add new expense
router.post('/add', async (req, res) => {
    const { name, amount } = req.body;
    try {
        const newExpense = new Expense({ name, amount });
        const savedExpense = await newExpense.save();
        res.status(201).json(savedExpense);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add expense' });
    }
});

// Get all expenses
router.get('/all', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch expenses' });
    }
});

module.exports = router;

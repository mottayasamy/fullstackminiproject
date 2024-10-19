import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const addExpense = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/expenses/add', { name, amount });
            console.log('Expense added:', response.data);
            setName('');
            setAmount('');
        } catch (err) {
            console.error('Error adding expense:', err);
        }
    };

    return (
        <form onSubmit={addExpense}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Expense Name"
                required
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;

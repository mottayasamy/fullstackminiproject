import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/expenses/all');
                setExpenses(response.data);
            } catch (err) {
                console.error('Error fetching expenses:', err);
            }
        };

        fetchExpenses();
    }, []);

    return (
        <div>
            <h2>All Expenses</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense._id}>{expense.name}: ${expense.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;

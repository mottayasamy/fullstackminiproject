import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>        BudgetPal: A Personal Finance Management</h1>
            <ExpenseForm />
            <ExpenseList />
        </div>
    );
}

export default App;

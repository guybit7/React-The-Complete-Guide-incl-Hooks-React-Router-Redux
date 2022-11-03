import React from 'react';
import NewExpense from './NewExpense.css';
import ExpenseForm2 from './ExpenseForm';

const NewExpense2 = (props) => {

    const saveExpenseDataHandler = (enteredExpensedData) => {
        const expenseData = {
            ...enteredExpensedData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm2 onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};

export default NewExpense2;
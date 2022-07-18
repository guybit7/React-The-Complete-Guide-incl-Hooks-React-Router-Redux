import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setEditing] = useState(false);

    const saveExpenseDataHandler = (theEnteredExpenseData) => {
        const expenseData = {
            ...theEnteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setEditing(false);
    }

    const startEditingHandler = () => {
        setEditing(true);
    }

    const stopEditingHandling = () => {
        setEditing(false);
    }

    return (<div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditingHandling={stopEditingHandling} />}
    </div>)

}
export default NewExpense;
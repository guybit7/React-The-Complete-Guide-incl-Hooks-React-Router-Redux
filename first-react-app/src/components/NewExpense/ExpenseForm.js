import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm.css';

const ExpenseForm2 = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (input) => {
        setEnteredTitle(input.target.value)
    };

    const amountChangeHandler = (input) => {
        setEnteredAmount(input.target.value)
    }

    const dateChangeHandler = (input) => {
        setEnteredDate(input.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');


    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" value={enteredDate} max="2022-12-31" onChange={dateChangeHandler}></input>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm2;
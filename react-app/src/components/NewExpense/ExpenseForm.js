import React, { userState, useState } from 'react';
// import MsButton from '../UI/MsButton';
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnterdTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnterdTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
            {/* <MsButton text={'Add Expense'} id={'add-expense-title-btn'} clickHandler={() => clickSubmit()} /> */}

        </div>
    </form>

}
export default ExpenseForm;
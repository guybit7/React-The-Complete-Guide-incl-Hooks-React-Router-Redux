import React, { useState } from 'react';
import Card2 from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('Updated!');
    // }

    return (
        <li>
            <Card2 className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change title</button> */}
            </Card2>
        </li>)
}

export default ExpenseItem;
import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate';
import MsButton from '../UI/MsButton';


const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        console.log('updated!');
        setTitle('updated!')
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>
                        {title}
                    </h2>
                    <div className="expense-item__price">
                        {props.amount}
                    </div>
                </div>
                <MsButton text={'Change Title'} id={'expense-item-change-title-btn-' + props.id} clickHandler={() => clickHandler()} />
                {/* <button onClick={clickHandler}> Change Title </button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;
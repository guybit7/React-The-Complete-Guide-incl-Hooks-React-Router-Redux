import './ExpenseItem.css';

import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate';
import MsButton from '../UI/MsButton';


const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>
                    {props.title}
                </h2>
                <div className="expense-item__price">
                    {props.amount}
                </div>
            </div>
            <MsButton text={'Change Title'} id={'expense-item-change-title-btn-'+props.id}/>
        </Card>
    );
}

export default ExpenseItem;
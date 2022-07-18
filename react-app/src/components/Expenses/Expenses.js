import react, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from '../Expenses/ExpenseItem';
import './Expenses.css';
import ExpenseFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterChangeHandler={filterChangeHandler} />
        {
          props.items.map(expense =>
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />)}

      </Card>
    </div>
  );
}

export default Expenses;
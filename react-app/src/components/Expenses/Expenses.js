import react, { useState } from 'react';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  let filteredItems = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterChangeHandler={filterChangeHandler} />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
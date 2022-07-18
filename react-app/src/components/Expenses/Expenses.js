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

  let filteredItems = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  })

  let expensesContent = <p>No expenses found.</p>;
  if (filteredItems.length > 0) {
    expensesContent = filteredItems.map(expense =>
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterChangeHandler={filterChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
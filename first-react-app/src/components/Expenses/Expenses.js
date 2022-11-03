import Card2 from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    console.log("Expense.js")
    console.log(selectedYear)
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(e => {
    return e.date.getFullYear().toString() === filteredYear;
  })


  return <div>
    <Card2 className='expenses'>
      <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card2>
  </div>;
}

export default Expenses;
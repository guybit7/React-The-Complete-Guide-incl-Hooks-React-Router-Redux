import ExpenseItem from "./components/ExpenseItem";

function App() {


  const expenses = [
    { title: 'Car Insurance 10', amount: 799.1, date: new Date(2022, 10, 1) },
    { title: 'Car Insurance 2', amount: 799.2, date: new Date(2022, 10, 2) },
    { title: 'Car Insurance 3', amount: 799.3, date: new Date(2022, 10, 3) }
  ]
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}></ExpenseItem>
    </div>
  );
}

export default App;
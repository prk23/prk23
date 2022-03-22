import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMYARRAY = [
  {
    id: 'e1',
    name: 'nameOne',
    date: new Date(2022, 9, 11),
    cost: 3452.44
  },
  {
    id: 'e2',
    name: 'NameTwo',
    date: new Date(2012, 11, 3),
    cost: 22.44
  },
  {
    id: 'e3',
    name: 'NameThree',
    date: new Date(2021, 6, 23),
    cost: 232.44
  },
  {
    id: 'e4',
    name: 'nameFour',
    date: new Date(2023, 5, 15),
    cost: 35345.44
  }
];
const App = () => {

  const [expenses, setExpenses] = useState(DUMMYARRAY)

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses])  // not a receommended way to updating a state that is depending snapshot of the previous state

    // instead try this clean way
    // setExpenses(prevExpense => {
    //   return [expense, ...prevExpense]
    // })

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h1', {}, `Let's get started`),
  //   React.createElement(Expenses, {items: itemsArray})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

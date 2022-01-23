import React, {useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpensesForm/NewExpenses";


const initial_expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
];


function App() {

  const [expenses,setExpenses] = useState(initial_expenses);

        const addExpenseHandler = expense => {
            setExpenses( prevExpenses => {
              return [expense , ...prevExpenses ]; 
            });
        };

      /* The JSX Syntax for function Return : */
            return (
              <div> 
                <NewExpenses  onAddExpenses = {addExpenseHandler} />
                <Expenses items={expenses}/>
              </div>
            );


      // Alternative to JSX is Using the rect object method : 

          // return React.createElement(
          //   'div',
          //   {},
          //   React.createElement('h2',{}, "Lets Get Started...."),
          //   React.createElement(Expenses , { items:expenses } )
          // );
        
}

export default App;

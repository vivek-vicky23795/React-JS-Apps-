// The NewExpenses Component : React Component :

    import React , {useState} from 'react';
    import ExpenseFrom from './ExpensesForm';
    import './NewExpenses.css';

    const NewExpenses = (props) => {

       const [isEditing , setIsEditing] = useState(false);

        const saveExpenseDataHandler = (enteredExpenseData) => {

            const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString()
            };

            props.onAddExpenses(expenseData);
            setIsEditing(false);

        }

        const startEditing = () => {
            setIsEditing(true);
        };

        const stopEditingHandler = () => {
            setIsEditing(false);
        }


        return (
            <div className="new-expense"> 
                {!isEditing && <button onClick = { startEditing } > Add New Expense </button>}
                {isEditing && <ExpenseFrom  onSaveExpenseData = {saveExpenseDataHandler} onCancle = {stopEditingHandler} />}
            </div>
        );
    };


    export default NewExpenses;


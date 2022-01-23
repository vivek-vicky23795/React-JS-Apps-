// The ExpensesFrom Component :

import React, { useState } from 'react';
import './ExpensesForm.css';


const ExpensesFrom = (props) => {

   const [titleInput, setTitleInput] =  useState("");
   const [amountInput , setAmountInput] = useState("");
   const [dateInput, setDateInput] = useState("");


    const titleHandler = (event) => {
        setTitleInput(event.target.value);
    }


    const amountHandler = (event) => {
        setAmountInput(event.target.value);
    }

    const dateHandler = (event) => {
        setDateInput(event.target.value);
    }

    const submitHandler = (event) => {
        
            event.preventDefault();

            const formInputValues = {
                title : titleInput,
                amount : +amountInput,
                date : new Date(dateInput)
            }

            
            props.onSaveExpenseData(formInputValues);
            
            
            setTitleInput("");
            setAmountInput("");
            setDateInput("");

    }


   

    return (
        <form onSubmit= { submitHandler }>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label> Title </label> 
                    <input type="text" value={titleInput} onChange={ titleHandler }/>
                </div>

                <div className="new-expense__control">
                    <label> Amount </label> 
                    <input type="number" value={amountInput} min="0.01" step="0.01" onChange={ amountHandler }/> 
                </div>

                <div className="new-expense__control">
                    <label> Date </label> 
                    <input type="date" value={dateInput} min="2019-01-01" max="2022-12-31"  onChange={ dateHandler }/>
                </div>

            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancle}> Cancle </button>
                <button type="submit"> Add Expense </button>
            </div>


        </form>
    );
}


export default ExpensesFrom;



// importing the css file :


    import React from 'react';
    import ExpenseDate from './ExpenseDate';
    import './ExpenseItem.css';


// The React Custom Component : 

    function ExpenseItem(props) {
      
        return (
            <div className="expense-item">
                <div> 
                    <ExpenseDate  date={props.date}/>
                </div>
                <div className="expense-item__description">
                    <h2> {props.title} </h2>
                    <div className="expense-item__price"> ${props.amount} </div>
                </div>
                
            </div>
        );
    }

// exporting the component :

    export default ExpenseItem;



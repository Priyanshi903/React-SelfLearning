import { useState } from 'react';

import './ExpenseForm.css';

// props added for child to parent communication
const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);

        setEnteredTitle(event.target.value);

        // event.target.value is always a string, therefore we initialize in useState as a string('')
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // by passing arrow function , we get the prevState snapshot
        // all scheduled states will be updated in this case as state update is scheduled by react
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, enteredTitle: event.target.value
        //     }
        // });

    }

    const amountChangeHandler = event => {

        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    }

    const dateChangeHandler = event => {

        setEnteredDate(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    }

    const submitHandler = (event) => {
        // preventDefault() is js method to prevent default behaviour of js i.e., page reloading here
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        // console.log(expenseData);

        // child to parent communication
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type='text'
                        // two way data-binding
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="10" step="10" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
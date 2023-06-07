// import ExpenseItem from "./ExpenseItem";

import './Expenses.css';
import '../UI/Card.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        console.log("in Expenses.js");
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // let expensesContent = <p>No expenses found.</p>;

    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map(
    //         (expense) =>
    //             <ExpenseItem
    //                 key={expense.id}
    //                 title={expense.title}
    //                 amount={expense.amount}
    //                 date={expense.date} />
    //     );
    // }

    return (

        <li>
            <Card className="expenses">

                {/* selected={filteredYear} is used to pass the initial state */}
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />


                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}

                {filteredExpenses.length > 0 &&

                    // curly braces reqd for below if not inside ternary operators
                    filteredExpenses.map(
                        (expense) =>
                            <ExpenseItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date} />
                    )

                } */}

                {/* {expensesContent} */}

                <ExpensesChart expenses={filteredExpenses} />

                <ExpensesList items={filteredExpenses} />

                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */}
            </Card>
        </li>

    )

}

export default Expenses;
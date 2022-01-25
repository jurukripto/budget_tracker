import React, { useContext, useState } from "react";
import AddExpense from "./AddExpense";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

// Component for list of expenses

const ExpenseList = (props) => {

    // Pull current list of expenses from global state
    const { expenses } = useContext(AppContext)

    return (
        <section class="section columns is-centered px-6 m-0 has-background-white-bis">
            <div class="column is-one-quarter">
                <AddExpense />
            </div>
            <div class="column is-one-third">
                <h1 class="title is-3">Expenses</h1> 
                <div class="box">
                    {/* Passes information to ExpenseItem component, which will render the expense items */}
                    { expenses.length === 0 ? <p class="has-text-centered">Start adulting by adding some expenses!</p> :
                        <ul>
                        {expenses.map((expenses) => 
                            <ExpenseItem
                                id={expenses.id}
                                name={expenses.name}
                                cost={expenses.cost}
                            />
                        )}
                        </ul>
                    }
                </div>
            </div>
        </section>
    )
}

export default ExpenseList


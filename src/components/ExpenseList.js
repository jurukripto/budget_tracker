import React, { useContext } from "react";
import AddExpense from "./AddExpense";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";


const ExpenseList = () => {

    const { expenses } = useContext(AppContext)
    console.log(expenses)

    return (
        <div class="columns is-centered mx-6">
            <div class="column is-one-third">
                <h1 class="title is-3 has-text-dark">Expenses</h1> 
                <div class="box">
                    { expenses.length === 0 ? <p class="has-text-centered">Start adulting by adding some expenses!</p> :
                        <ul>
                        {expenses.map((expenses) => 
                            <ExpenseItem
                                id={expenses.id}
                                name={expenses.name}
                                cost={expenses.cost} />
                        )}
                        </ul>
                    }
                </div>
            </div>
            <div class="column is-one-quarter">
                <AddExpense />
            </div>
        </div>
        
        
    )
}

export default ExpenseList


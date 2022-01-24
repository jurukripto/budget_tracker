import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import AnimatedNumber from "animated-number-react"

const ExpensesTotal = () => {

    const { expenses } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0)

    return (
        <div>
            <h1 class="title is-4 has-text-danger">Spent</h1> 
                <div class="box has-background-danger-light"> 
                    <h1 class="title is-4 has-text-danger-dark">$
                    <AnimatedNumber value={totalExpenses}
                                    formatValue={(totalExpenses) => totalExpenses.toFixed(2)}
                                    duration="500" /></h1>
                </div>
        </div>
    )
}

export default ExpensesTotal
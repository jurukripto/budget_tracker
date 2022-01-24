import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import AnimatedNumber from "animated-number-react"

const Remaining = () => {

    const { budget, expenses } = useContext(AppContext)
    

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0)

    const remaining = budget - totalExpenses

    const remainderState = totalExpenses >= budget? "box has-background-danger-light" : "has-background-success-light"

    return (
        <div>
            <h1 class="title is-4 has-text-primary">Remaining</h1> 
                <div class={`box ${remainderState}`}> 
                    <h1 class="title is-4 has-text-primary-dark">$
                    <AnimatedNumber value={budget-totalExpenses}
                                    formatValue={(remaining) => remaining.toFixed(2)}
                                    duration="500" /></h1>
                </div>
        </div>
    )
}

export default Remaining
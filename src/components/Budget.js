import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import AnimatedNumber from "animated-number-react"


const Budget = () => {

    // Pull global state for budget and dispatch
    const { budget, dispatch } = useContext(AppContext)

    // Control state for editting the budget
    const [editMode, toggle] = useState(0)

    // State for the editting input field
    const [budgetVal, updateVal] = useState(budget)


    const handleBudgetEdit = (e) => {
        updateVal(e.target.value)
    }

    // Key down behavior for when user presses 'Enter' to save
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            pushBudgetEdit()
        }
    }
 
    // Send new budget value to global state
    const pushBudgetEdit = () => {
        dispatch({
            type: 'UPDATE_BUDGET',
            payload: budgetVal
        })
        toggle(0)
    }

    return (
        <div>
            <div class="is-flex is-justify-content-space-between">
                <h1 class="title is-4 has-text-link">Budget</h1>
                {editMode == 1 ?
                    <button class="button is-primary is-light" onClick={pushBudgetEdit}>Save</button> :
                    <button class="button is-link is-light" onClick={() => toggle(1)}>Edit</button>
                }
            </div>
                <div class="box">
                    {editMode == 1 ? 
                        <input class="title is-6" type="text" value={budgetVal} onChange={handleBudgetEdit} onKeyDown={handleKeyDown}/> : 
                        <h1 class="title is-4">$
                        <AnimatedNumber value={budget}
                                    formatValue={(budget) => budget.toFixed(2)}
                                    duration="500" /></h1>
                    } 
                </div>
        </div>
    )
}

export default Budget
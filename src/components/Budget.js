import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {

    const { budget, dispatch } = useContext(AppContext)

    const [editMode, toggle] = useState(0)
    const [budgetVal, updateVal] = useState(budget)

    const handleBudgetEdit = (e) => {
        updateVal(e.target.value)
    }

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
                        <input class="title is-6" type="text" value={budgetVal} onChange={handleBudgetEdit} /> : 
                        <h1 class="title is-4">${budget}</h1>
                    } 
                </div>
        </div>
    )
}

export default Budget
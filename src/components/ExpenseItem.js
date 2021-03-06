import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

// Component that renders the display for each expense items

const ExpenseItem = (props) => {
    const { id, name, cost } = props

    const { dispatch } = useContext(AppContext)

    const handleDeleteExpense = () => {

        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        })
    }

    return (
        <li class="columns is-vcentered is-mobile">
            <div class="column">
                <span class="tag is-warning is-light is-medium">{name}</span>
            </div>
            <div class="column is-4">
                <span class="tag is-danger is-light is-medium">${cost}</span>
            </div>
            <div class="column is-2">
            <button class="delete" onClick={handleDeleteExpense}/>
            </div>
        </li>
    )
}

export default ExpenseItem
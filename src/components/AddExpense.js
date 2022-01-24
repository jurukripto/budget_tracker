import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4} from 'uuid'

const AddExpense = () => {

    const { dispatch } = useContext(AppContext)
    const [itemVal, setItemVal] = useState("")
    const [costVal, setCostVal] = useState("")
    const [inputErr, setInputErr] = useState(0)

    const handleItemInput = (e) => {
        setItemVal(e.target.value)
    }

    const handleCostInput = (e) => {
        setCostVal(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (itemVal != "" && costVal !== "") {
            setInputErr(0)
            const expense = {
                id: uuidv4(),
                name: itemVal,
                cost: parseInt(costVal),
            }
            setItemVal("")
            setCostVal("")
    
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense
            })
        }
        else {
            setInputErr(1)
        }
    }

    return (
        <div>
        <h1 class="title is-4 has-text-warning-dark">Add a new expense</h1>
        <form class="box has-background-warning mb-6" onSubmit={onSubmit}>
    
                <div class="field">
                    <label class="label has-text-warning-dark">Item</label>
                    <input class="input" type="text" value={itemVal} onChange={handleItemInput}/>
                    <p class="help is-danger">Please enter a name</p>
                </div>
                <div class="field">
                    <label class="label has-text-warning-dark">Cost</label>
                    <input class="input" type="text" value={costVal} onChange={handleCostInput}/>
                </div>  
                <div class="field is-grouped is-grouped-centered">
                    <p class="control">
                        <button class="button is-warning is-light">Add</button>
                    </p>
                </div>      
        </form>
        </div>
    )
}

export default AddExpense
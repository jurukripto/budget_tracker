import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4} from 'uuid'

// Component that handles the render and logic for adding a new expense item

const AddExpense = (props) => {

    const { dispatch } = useContext(AppContext)
    const [itemVal, setItemVal] = useState("")
    const [costVal, setCostVal] = useState("")

    // Toggle error message state if input is invalid
    const [validatedItem, itemIsInvalid] = useState(false)
    const [validatedCost, costIsInvalid] = useState(false)
    const [inputBox, setHighlight] = useState("input")

    const handleItemInput = (e) => {
        setItemVal(e.target.value)
    }

    const handleCostInput = (e) => {
        setCostVal(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (costVal !== "" && isNaN(parseFloat(costVal))) {
            costIsInvalid(true)
            setHighlight("input is-danger")
        } else if (itemVal != "" && costVal !== "") {
            itemIsInvalid(false)
            costIsInvalid(false)
            setHighlight("input")
            const expense = {
                id: uuidv4(),
                name: itemVal,
                cost: parseFloat(costVal),
            }
            setItemVal("")
            setCostVal("")
    
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense
            })
        }
        else {
            itemIsInvalid(true)
            setHighlight("input is-danger")
        }
    }

    return (
        <div>
        <h1 class="title is-4 has-text-centered">Add a new expense</h1>
        <form class="box mb-6" onSubmit={onSubmit}>
                <div class="field">
                    <label class="label">Item</label>
                    <input class={inputBox} type="text" value={itemVal} onChange={handleItemInput}/>
                </div>
                <div class="field">
                    <label class="label">Cost</label>
                    <input class={inputBox} type="text" value={costVal} onChange={handleCostInput}/>
                    {validatedItem && <p class="help is-danger">Make sure there are no empty fields</p>}
                    {validatedCost && <p class="help is-danger">Cost can only accept numbers</p>}
                </div>  
                <div class="field">
                    <p class="control">
                        <button class="button is-fullwidth is-warning is-light">Add</button>
                    </p>
                </div>      
        </form>
        </div>
    )
}

export default AddExpense
import React, { useContext, useState } from "react";
import Budget from "./Budget";
import Remaining from "./Remaining";
import ExpensesTotal from "./ExpensesTotal";

// This component acts as the container for components that display balances

const BudgetHandler = () => {
    
    return (
        <section class="section columns is-centered mx-3">
            <div class="column is-one-fifth">
                <Budget />
            </div>
            <div class="column is-one-fifth">
                <Remaining />
            </div>
            <div class="column is-one-fifth">
                <ExpensesTotal />
            </div>
        </section>
    )
}

export default BudgetHandler
import React from "react";
import BudgetStats from "./components/BudgetStats";
import Title from "./components/Title";
import ExpenseList from "./components/ExpenseList"
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";


const App = () => {

  return (
    <AppProvider>
        <div>
          <Title />
          <BudgetStats />
          <ExpenseList />
        </div>
    </AppProvider>
    
  )
}

export default App
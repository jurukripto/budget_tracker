import React from "react";
import BudgetStats from "./components/BudgetStats";
import Title from "./components/Title";
import ExpenseList from "./components/ExpenseList"
import Footer from "./components/Footer";
import { AppProvider } from "./context/AppContext";


const App = () => {

  return (
    <AppProvider>
        <div>
          <Title />
          <BudgetStats />
          <ExpenseList />
          <Footer />
        </div>
    </AppProvider>
  )
}

export default App
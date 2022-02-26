import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseAddButton from "./ExpenseAddButton";
function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const addExpenseClickHandler = (event) => {
    if (event) {
      setShowForm((prevShowForm) => !prevShowForm);
    }
  };
  const cancelClickHandler = (event) => {
    if (event) {
      setShowForm((prevShowForm) => !prevShowForm);
    }
  };

  if (showForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelClickHandler}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseAddButton onAddExpenseClick={addExpenseClickHandler} />
      </div>
    );
  }
}

export default NewExpense;

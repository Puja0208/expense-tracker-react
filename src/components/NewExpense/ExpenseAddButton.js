import "./ExpenseAddButton.css";
function ExpenseAddButton(props) {
  const clickHandler = (event) => {
    props.onAddExpenseClick(event);
  };
  return (
    <div className="add-expense">
      <button className="add-expense__button" onClick={clickHandler}>
        Add New Expense
      </button>
    </div>
  );
}

export default ExpenseAddButton;

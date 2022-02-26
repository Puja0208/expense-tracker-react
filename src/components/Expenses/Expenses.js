import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("filter value in expense", selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />

        <ExpenseItem
          title={items[0].title}
          date={items[0].date}
          amount={items[0].amount}
        />
        <ExpenseItem
          title={items[1].title}
          date={items[1].date}
          amount={items[1].amount}
        />
        <ExpenseItem
          title={items[2].title}
          date={items[2].date}
          amount={items[2].amount}
        />
      </Card>
    </div>
  );
}
export default Expenses;

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Summary = () => {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="cards">
      <div className="card balance">
       <h3>Balance</h3>
       <p>₹ {income - expense}</p>
      </div>

      <div className="card income">
       <h3>Income</h3>
       <p>₹ {income}</p>
      </div>

      <div className="card expense">
       <h3>Expense</h3>
       <p>₹ {expense}</p>
      </div>
    </div>
  );
};

export default Summary;

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  const expenses = transactions.filter((t) => t.type === "expense");

  const map: Record<string, number> = {};

  expenses.forEach((t) => {
    map[t.category] = (map[t.category] || 0) + t.amount;
  });

  const highest = Object.entries(map).sort((a, b) => b[1] - a[1])[0];
  const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);
  const categoryData = Object.entries(map).sort((a, b) => b[1] - a[1]);

  return (
    <div className="insights-content">
      <h3>Insights</h3>
      {highest ? (
        <>
          <p className="insight-highlight">💡 Highest spending: {highest[0]} (₹ {highest[1]})</p>
          <p>Total expense: ₹ {totalExpense}</p>

          <div className="bar-chart">
            {categoryData.map(([category, amount]) => {
              const percent = totalExpense ? Math.round((amount / totalExpense) * 100) : 0;
              return (
                <div key={category} className="bar-item">
                  <div className="bar-label">
                    <span>{category}</span>
                    <span>₹ {amount} ({percent}%)</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${percent}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <p>No insights available</p>
      )}
    </div>
  );
};

export default Insights;

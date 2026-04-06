import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import Summary from "../components/Summary";
import Transactions from "../components/Transactions";
import Filters from "../components/Filters";
import Insights from "../components/Insights";

const Dashboard = () => {
  const { role, setRole, addTransaction } = useContext(AppContext);

  return (
    <div className="container dashboard">
      <header className="dashboard-header">
        <h1>Finance Dashboard</h1>
        <div className="header-actions">
          <label>
            Role:
            <select onChange={(e) => setRole(e.target.value)} value={role}>
              <option value="viewer">Viewer</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          {role === "admin" && (
            <button
              className="btn add-btn"
              onClick={() =>
                addTransaction({
                  date: "2026-03-20",
                  amount: 500,
                  category: "Food",
                  type: "expense",
                })
              }
            >
              + Add Transaction
            </button>
          )}
        </div>
      </header>

      <Summary />

      <section className="main-grid">
        <article className="panel">
          <h2>Transactions</h2>
          <Filters />
          <Transactions />
        </article>

        <aside className="panel insights-panel">
          <h2>Quick Insights</h2>
          <Insights />
        </aside>
      </section>
    </div>
  );
};

export default Dashboard;

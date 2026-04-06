import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Transactions = () => {
  const { transactions, search, filterType } = useContext(AppContext);

  const filtered = transactions
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) => (filterType === "all" ? true : t.type === filterType));

  if (filtered.length === 0) return <p>No transactions found</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((t) => (
          <tr key={t.id}>
            <td>{t.date}</td>
            <td>₹ {t.amount}</td>
            <td>{t.category}</td>
            <td>{t.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Filters = () => {
  const { search, setSearch, filterType, setFilterType } =
    useContext(AppContext);

  return (
    <div className="filters">
      <input
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
};

export default Filters;

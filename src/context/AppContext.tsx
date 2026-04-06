import { createContext, useState } from "react";
import type { ReactNode } from "react";

export type Transaction = {
  id: number;
  date: string;
  amount: number;
  category: string;
  type: "income" | "expense";
};

type ContextType = {
  transactions: Transaction[];
  role: string;
  search: string;
  filterType: string;
  setRole: (role: string) => void;
  setSearch: (s: string) => void;
  setFilterType: (f: string) => void;
  addTransaction: (t: Omit<Transaction, "id">) => void;
};

export const AppContext = createContext<ContextType>({} as ContextType);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, date: "2026-03-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2026-03-02", amount: 800, category: "Food", type: "expense" },
    { id: 3, date: "2026-03-05", amount: 1200, category: "Shopping", type: "expense" },
  ]);

  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const addTransaction = (t: Omit<Transaction, "id">) => {
    setTransactions([...transactions, { ...t, id: Date.now() }]);
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        role,
        search,
        filterType,
        setRole,
        setSearch,
        setFilterType,
        addTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
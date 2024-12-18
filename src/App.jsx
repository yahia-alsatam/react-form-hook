import { useState } from "react";
import FormProduce from "./components/FormProduc/FormProduce";
import ListProduce from "./components/ListProduce/ListProduce";

function App() {
  const [expenses, setexpenses] = useState([
    { id: 1, Price: 1000, ProductName: "laptop" },
    { id: 2, Price: 500, ProductName: "Phone" },
    { id: 3, Price: 150, ProductName: "Headphones" },
  ]);

  return (
    <>
      <FormProduce
        onSubmit={(expense) =>
          setexpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <ListProduce
        expenses={expenses}
        onDelete={(id) => setexpenses(expenses.filter((e) => e.id !== id))}
        onIncrease={(id) =>
          setexpenses(
            expenses.filter((e) =>
              e.id === id ? (e.Price = e.Price + 50) : e.Price
            )
          )
        }
      />
    </>
  );
}

export default App;

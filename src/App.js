import React, { useState } from "react";
import "./App.css";
import AllCountryScores from "./AllCountryScores";

//Import components
import Header from "./components/Header";
import TableCountry from "./components/TableCountry";

const App = () => {
  const [currentSort, setCurrentSort] = useState("down");

  const sortTypes = {
    up: {
      class: "Ascending",
      fn: (a, b) => a.s - b.s,
    },
    down: {
      class: "Descending",
      fn: (a, b) => b.s - a.s,
    },
  };

  const onSortChange = () => {
    let nextSort;
    if (currentSort === "down") {
      nextSort = "up";
    } else {
      nextSort = "down";
    }
    return setCurrentSort(nextSort);
  };

  return (
    <div className="container">
      <Header />
      <TableCountry
        scores={AllCountryScores}
        sortTypes={sortTypes}
        currentSort={currentSort}
        onSortChange={onSortChange}
      />
    </div>
  );
};

export default App;

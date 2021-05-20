import React from 'react';
import "./App.css";
import AllCountryScores from "./AllCountryScores";


//Import components
import Header from "./components/Header";
import Country from "./components/Country";


const App = () => {
  return (
    <div className="container">
      <Header />
      <Country scores={AllCountryScores}/>
    </div>
  );
}

export default App;

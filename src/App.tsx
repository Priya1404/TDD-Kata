import React from 'react';
import logo from './logo.svg';
import './App.css';
import StringCalc from "./components/StringCalc";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <StringCalc />

      </header>
    </div>
  );
}

export default App;

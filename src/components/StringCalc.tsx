import React, { useState } from "react";
import './StringCalc.css';

import { StringCalculator } from "../utils/StringCalculator/StringCalculator";

const StringCalc = () => {
  const [input, setInput] = useState<string>(""); 
  const [result, setResult] = useState<string | number>(""); 

  const calculator = new StringCalculator();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); 
  };

  const handleCalculate = () => {
    
    try {
      const normalizedInput = input.trim().replace(/\\n/g, '\n'); //Converts any escaped \n (from user input, e.g., \\n) into an actual newline character (\n)
      const sum = calculator.add(normalizedInput); 
      setResult(sum); 
    } catch (error: any) {
      setResult(error.message); 
    }
  };

  return (
    <div className="calculator-container">
      <h2>String Calculator</h2>
      <input
         type="text"
         value={input}
         onChange={handleInputChange}
         placeholder="Enter numbers (e.g., 1,2,3)"
         className="calculator-input"
        />
      <button onClick={handleCalculate} className="calculator-button">
         Calculate
        </button>
      <div className="calculator-result">
        <strong>Result: </strong>
        {result}
      </div>
    </div>
  );

};

export default StringCalc;
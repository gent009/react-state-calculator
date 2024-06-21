import React, { useState } from "react";
import "./App.css";

function App() {
  // State variables to keep track of the calculator's display values, operator, and result
  const [display1, setDisplay1] = useState("0");
  const [display2, setDisplay2] = useState("0");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("0");
  // Function to handle number button clicks
  const handleNumberClick = (number, displaySetter, currentDisplay) => {
    // If the current display is "0", replace it with the clicked number
    if (currentDisplay === "0") {
      displaySetter(number);
    } else {
      // Otherwise, append the clicked number to the current display
      displaySetter(currentDisplay + number);
    }
  };
  // Function to handle operator button clicks
  const handleOperatorClick = (op) => {
    setOperator(op);
  };
  // Function to handle clear button clicks
  const handleClear = (displaySetter) => {
    displaySetter("0");
  };
  // Function to handle equal button clicks and perform the calculation
  const handleEqualClick = () => {
    const num1 = parseFloat(display1);
    const num2 = parseFloat(display2);
    let res = 0;
    // Perform the calculation based on the selected operator
    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "÷":
        res = num2 !== 0 ? num1 / num2 : "Error"; // Prevent division by zero
        break;
      default:
        break;
    }
    // Update the result state with the calculated result
    setResult(res.toString());
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{display1}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button
              key={number}
              onClick={() =>
                handleNumberClick(number.toString(), setDisplay1, display1)
              }
            >
              {number}
            </button>
          ))}
          <button onClick={() => handleClear(setDisplay1)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {["+", "-", "*", "÷"].map((op) => (
            <button key={op} onClick={() => handleOperatorClick(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{display2}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button
              key={number}
              onClick={() =>
                handleNumberClick(number.toString(), setDisplay2, display2)
              }
            >
              {number}
            </button>
          ))}
          <button onClick={() => handleClear(setDisplay2)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleEqualClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  // TODO: State variables to keep track of the calculator's display values, operator, and result
  const [display1, setDisplay1] = useState("0");
  const [display2, setDisplay2] = useState("0");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("0");

  // TODO: Function to handle number button clicks
  const handleNumberClick = (number, displaySetter, currentDisplay) => {
    // TODO: If the current display is "0", replace it with the clicked number
    if (currentDisplay === "0") {
      displaySetter(number);
    } else {
      // TODO: Otherwise, append the clicked number to the current display
      displaySetter(currentDisplay + number);
    }
  };

  // TODO: Function to handle operator button clicks
  const handleOperatorClick = (op) => {
    setOperator(op);
  };

  // TODO: Function to handle clear button clicks
  const handleClear = (displaySetter) => {
    displaySetter("0");
  };

  // TODO: Function to handle equal button clicks and perform the calculation
  const handleEqualClick = () => {
    const num1 = parseFloat(display1); // TODO: Convert first display value to a number
    const num2 = parseFloat(display2); // TODO: Convert second display value to a number
    let res = 0;

    // TODO: Perform the calculation based on the selected operator
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
        res = num2 !== 0 ? num1 / num2 : "Error"; // TODO: Prevent division by zero
        break;
      default:
        break;
    }

    // TODO: Update the result state with the calculated result
    setResult(res.toString());
  };

  return (
    <div className="calculator">
      {/* TODO: First number panel */}
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

      {/* TODO: Operator panel */}
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

      {/* TODO: Second number panel */}
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

      {/* TODO: Result panel */}
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

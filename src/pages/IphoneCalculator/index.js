import React, { useState } from "react";
import "./index.css";

const buttons = [
  ["C", "+/-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "=",],
];

const IphoneCalculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");
  const [lastPressed, setLastPressed] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("0");
      setLastPressed("");
      return;
    }
    if (value === "+/-") {
      if (expression) {
        if (expression.startsWith("-")) {
          setExpression(expression.slice(1));
        } else {
          setExpression("-" + expression);
        }
      }
      return;
    }
    if (value === "%") {
      if (expression) {
        setExpression((parseFloat(expression) / 100).toString());
      }
      return;
    }
    if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        const evalResult = eval(expression.replace(/\%/g, "/100").replace(/\u00D7/g, '*').replace(/\u00F7/g, '/'));
        setResult(evalResult.toString());
        setExpression(evalResult.toString());
      } catch {
        setResult("Error");
      }
      setLastPressed("=");
      return;
    }
    if (["/", "*", "+", "-"].includes(value)) {
      if (expression === "" && value !== "-") return;
      if (["/", "*", "+", "-"].includes(lastPressed)) {
        setExpression(expression.slice(0, -1) + value);
      } else {
        setExpression(expression + value);
      }
      setLastPressed(value);
      return;
    }
    // For numbers and dot
    if (lastPressed === "=") {
      setExpression(value);
      setResult(value);
      setLastPressed(value);
      return;
    }
    setExpression(expression + value);
    setLastPressed(value);
  };

  return (
    <div className="iphone-calc-container">
      <div className="iphone-calc-body">
        <div className="iphone-calc-screen">
          <div className="iphone-calc-expression">{expression || 0}</div>
          <div className="iphone-calc-result">{result}</div>
        </div>
        <div className="iphone-calc-buttons">
          {buttons.flat().map((btn, idx) => (
            <button
              key={idx}
              className={`iphone-calc-btn ${
                ["/", "*", "-", "+", "="] .includes(btn) ? "operator" : btn === "C" ? "clear" : ""
              } ${btn === "0" ? "zero" : ""}`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IphoneCalculator; 
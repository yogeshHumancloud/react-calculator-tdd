import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num) => {
    if (newNumber) {
      setDisplay(num.toString());
      setNewNumber(false);
    } else {
      setDisplay(display + num.toString());
    }
  };

  const handleOperation = (op) => {
    setFirstNumber(parseFloat(display));
    setOperation(op);
    setNewNumber(true);
  };

  const handleEquals = () => {
    const secondNumber = parseFloat(display);
    let result;

    switch (operation) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "×":
        result = firstNumber * secondNumber;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-72">
        <div
          data-testid="display"
          className="bg-gray-100 p-4 text-right text-2xl mb-4 rounded"
        >
          {display}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "×", "C", 0, "="].map(
            (btn) => (
              <button
                key={btn}
                onClick={() => {
                  if (typeof btn === "number") handleNumber(btn);
                  else if (btn === "=") handleEquals();
                  else if (btn === "C") handleClear();
                  else handleOperation(btn);
                }}
                className={`
                ${btn === "=" ? "col-span-2" : ""}
                ${
                  typeof btn === "number" || btn === "C"
                    ? "bg-gray-200 hover:bg-gray-300"
                    : "bg-orange-400 hover:bg-orange-500 text-white"
                }
                p-4 text-xl rounded transition-colors duration-200
              `}
              >
                {btn}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

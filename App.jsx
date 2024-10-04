import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInputValue("");

      if (!inputValue) {
        setResult("Error");
      } else {
        setResult("");
      }
    } else if (value === "=") {
      try {
        setResult(eval(inputValue));
      } catch (e) {
        setResult(e);
      }

      setInputValue("");
    } else {
      setInputValue((prev) => prev + value);
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input
        type="text"
        value={inputValue}
        readOnly
        // onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="result-div">{result}</div>

      <div className="grid-container">
        {[
          "7",
          "8",
          "9",
          "+",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "*",
          "C",
          "0",
          "=",
          "/",
        ].map((value, index) => {
          return (
            <button
              key={index}
              onClick={() => handleButtonClick(value)}
              className="grid-item"
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;

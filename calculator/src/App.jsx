import React, { useState } from "react";
import NumButton from "./components/NumButton";
import OperatorButton from "./components/OperatorButton";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState("");

  const addValue = (v) => {
    setResult(result + v);
  };

  const calculate = () => {
    const resultCalc = eval(result);
    setResult(resultCalc);
  };

  const renderNumButton = (i) => {
    return <NumButton index={i} onClick={() => addValue(i)} />;
  };

  const renderOperatorButton = (t) => {
    if (t == "=") {
      return <OperatorButton type={t} onClick={() => calculate()} />;
    } else {
      return <OperatorButton type={t} onClick={() => addValue(t)} />;
    }
  };

  return (
    <div className="App">
      <div className="result">
        <Result result={result} />
      </div>

      <div className="row">
        {renderNumButton(7)}
        {renderNumButton(8)}
        {renderNumButton(9)}
        {renderOperatorButton("/")}
      </div>
      <div className="row">
        {renderNumButton(4)}
        {renderNumButton(5)}
        {renderNumButton(6)}
        {renderOperatorButton("*")}
      </div>
      <div className="row">
        {renderNumButton(1)}
        {renderNumButton(2)}
        {renderNumButton(3)}
        {renderOperatorButton("-")}
      </div>
      <div className="row">
        {renderNumButton(".")}
        {renderNumButton(0)}
        {renderOperatorButton("=")}
        {renderOperatorButton("+")}
      </div>
    </div>
  );
}

export default App;

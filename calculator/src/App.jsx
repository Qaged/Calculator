import React from "react";
import NumButton from "./components/NumButton";
import OperatorButton from "./components/OperatorButton";

function App() {
  const renderNumButton = (i) => {
    return <NumButton index={i} />;
  };

  const renderOperatorButton = (t) => {
    return <OperatorButton type={t} />;
  };

  return (
    <div className="App">
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
        {renderOperatorButton("x")}
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

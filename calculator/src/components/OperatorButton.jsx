import React from "react";

const OperatorButton = ({ type, onClick }) => {
  return <button onClick={onClick}>{type}</button>;
};

export default OperatorButton;

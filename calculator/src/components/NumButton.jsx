import React from "react";

const NumButton = ({ index, onClick }) => {
  return <button onClick={onClick}>{index}</button>;
};

export default NumButton;

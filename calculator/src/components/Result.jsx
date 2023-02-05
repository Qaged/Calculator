import React from "react";

const Result = ({ result }) => {
  const content = result == 0 ? "0" : result;

  return <p>{content}</p>;
};

export default Result;

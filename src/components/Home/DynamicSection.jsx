import React from "react";

const DynamicSection = ({ title, content }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
    </>
  );
};

export default DynamicSection;

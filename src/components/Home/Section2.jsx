import React, { useState } from "react";

const Section2 = () => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(true);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      {/* akert */}
      <div style={open ? { display: "block" } : { display: "none" }}>
        <div>Alert box</div>
        <button onClick={() => setOpen(false)}>Close me</button>
      </div>
      <button onClick={() => setOpen(true)}>Open Alert</button>
    </div>
  );
};

export default Section2;

import { useState } from "react";
import ChildButton from "./ChildButton";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Parent Count: {count}</h1>
      <ChildButton onIncrease={handleIncrease} />
    </div>
  );
}

export default App;

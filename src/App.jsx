import { useState } from "react";
import "./App.css";


function App() {
  const [count, setcount] = useState(0);

  function increase() {
    setcount(count + 1);
  }
  function decrease() {
    if (count > 0) {
      setcount(count - 1);
    }
  }
  function reset() {
    setcount(0);
  }

  let countColor = "#6c757d"

  if (count >= 10) {
    countColor = "#28a745"
  } else if (count > 0) {
    countColor = "#0d6efd"
  }

  <button className="decrease"
    onClick={decrease}
    disabled={count ===0}
    >
      Decrease 
  </button>

  return (
    <>
      <div className="container">
        <h1>React Counter App</h1>
        <h2 style={{ color: countColor }}>{count}</h2>
        {
          count >= 10 && <p className="Txt">Congratulations! You reached 10.</p>
        }
        <button className="increase" onClick={increase}>Increase</button>
        <button className="decrease" onClick={decrease}>Decrease</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;












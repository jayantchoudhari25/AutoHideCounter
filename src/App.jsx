import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function AutoHideCounter() {
    const [count, setCount] = useState(0)
    const [visible, setVisible] = useState(true)

    function increment() {
      const newCount = count + 1
      setCount(newCount)

      if (newCount >= 5) {
        setVisible(false)
      } 
    }
 function decrement() {
  const newCount = count - 1
  setCount(newCount)
  if (newCount <= 0) {
    setVisible(true)
  } else {
    setVisible(false)
  }
}

    const reset = () => {
      setCount(0);                  // reset count to 0
      setVisible(true);             // make Increase button visible again
    };

    return (
      <>
        <h1 style={{ color: "#682905ff" }}>Count is {count}</h1>
        <div className="card">
          {visible && <button onClick={increment}>Increase</button>}
          <button onClick={reset} style={{ marginLeft: "10px" }}>Reset</button>
          {!visible && <button onClick={decrement} style={{ marginLeft: "10px" }}>Decrease</button>}

        </div>
      </>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px", backgroundColor: "lightblue", padding: "20px 40px", borderRadius: "50px" }}>
      <h2 style={{ color: "#3c0c69ff", fontSize: "20px" }}>Auto-Hide Counter App</h2>
      <AutoHideCounter />
    </div>
  );
}

export default App




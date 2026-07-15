import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello! Welcome to Event Handling Example");
  }

  function handleIncrement() {
    increment();
    sayHello();
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Event Examples App</h1>

      <h2>Counter : {count}</h2>

      <button onClick={handleIncrement}>
        Increment
      </button>

      &nbsp;&nbsp;

      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
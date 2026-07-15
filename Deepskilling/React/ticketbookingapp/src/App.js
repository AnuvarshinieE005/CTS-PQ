import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div style={{ marginLeft: "150px", marginTop: "80px" }}>
        <h1>Welcome back</h1>

        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={{ marginLeft: "150px", marginTop: "80px" }}>
      <h1>Please sign up.</h1>

      <button onClick={() => setIsLoggedIn(true)}>
        Login
      </button>
    </div>
  );
}

export default App;
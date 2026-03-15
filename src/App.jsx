import "./App.css";
import { useState } from "react";
import Button from "./Button";
import Counter from "./Counter.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div>
      <h1>Hello from Suraj Pawar</h1>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
      {loggedIn ? <Button /> : <Counter />}
    </div>
  );
}
export default App;

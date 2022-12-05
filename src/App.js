import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Home
        <Link to="/about">About</Link>
        <Link to="/example">Example</Link>
        <Link to="/contact">Contact</Link>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/contact">About</Link>
      </p>
      <p>
        <Link to="/example">Example</Link>
      </p>
    </div>
  );
}

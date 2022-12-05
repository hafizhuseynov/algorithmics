import React from "react";
import { Link } from "react-router-dom";
export default function Example() {
  return (
    <div>
      <h1>Example</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
    </div>
  );
}

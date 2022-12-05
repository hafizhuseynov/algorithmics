import React from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/example">Example</Link>
      </p>
    </div>
  );
}

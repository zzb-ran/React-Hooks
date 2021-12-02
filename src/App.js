import React, { useState } from 'react';
import data from './data.js';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const subtractCount = () => {
    setCount(count - 1);
  };

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello React-Hooks!</h1>
      <button onClick={subtractCount}>-</button>
      <p>Count: {count}</p>
      <button onClick={addCount}>+</button>
      <code>{data}</code>
    </div>
  );
}

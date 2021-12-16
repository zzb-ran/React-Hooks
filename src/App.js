import React, { useState, useEffect } from 'react';
import data from './data.js';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [aaa, setAaa] = useState(0);
  const [data, setData] = useState([]);

  const subtractCount = () => {
    setCount(count - 1);
  };

  const addCount = () => {
    // setCount(count + 1);
    setAaa(aaa + 1);
  };

  useEffect(() => {
    console.log(`count 改变为 ${count}`);
  }, [aaa]);

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

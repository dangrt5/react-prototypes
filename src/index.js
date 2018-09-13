import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => Math.floor(Math.random() * 1001);

const user = {
  name: "Randy",
  luckyNumber: luckyNumber()
}

const Greeting = prop => {
  return <div className="container">
    <h1>Hello, {prop.name}</h1>
    <h2 className="text-muted">Your lucky number is... {prop.luckyNumber}</h2>
  </div>
}

ReactDOM.render(
    Greeting(user),
    document.getElementById('root')
);

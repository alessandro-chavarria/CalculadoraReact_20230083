import React from 'react';
import Calculator from './components/Calculator.js';
import Lista from './components/TodoList.js';

function App() {
  return (
    <div className="app-container">
      <Calculator />
      <Lista />
    </div>
  );
}

export default App;
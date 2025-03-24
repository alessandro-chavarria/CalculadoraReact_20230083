import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('suma');

  const calculateResult = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      alert('Por favor, ingrese números válidos');
      return;
    }

    switch (operation) {
      case 'suma':
        setResult((a + b).toString());
        break;
      case 'resta':
        setResult((a - b).toString());
        break;
      case 'multiplicacion':
        setResult((a * b).toString());
        break;
      case 'division':
        if (b === 0) {
          alert('No se puede dividir por cero');
          return;
        }
        setResult((a / b).toString());
        break;
      default:
        break;
    }
  };

  const clearFields = () => {
    setNum1('');
    setNum2('');
    setResult('');
    setOperation('suma');
  };

  return (
    <div className="calculator-container">
      <h2>Calculadora</h2>
      <div className="input-group">
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Número 1"
        />
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Número 2"
        />
      </div>
      <div className="operation-buttons">
        <button 
          className={operation === 'suma' ? 'active' : ''} 
          onClick={() => setOperation('suma')}
        >
          +
        </button>
        <button 
          className={operation === 'resta' ? 'active' : ''} 
          onClick={() => setOperation('resta')}
        >
          -
        </button>
        <button 
          className={operation === 'multiplicacion' ? 'active' : ''} 
          onClick={() => setOperation('multiplicacion')}
        >
          ×
        </button>
        <button 
          className={operation === 'division' ? 'active' : ''} 
          onClick={() => setOperation('division')}
        >
          ÷
        </button>
      </div>
      <div className="action-buttons">
        <button onClick={calculateResult}>Calcular</button>
        <button onClick={clearFields}>Limpiar</button>
      </div>
      {result && (
        <div className="result">
          <p>Resultado: {result}</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
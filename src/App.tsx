import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');

  const handleClickEvents = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('0');
  };

  const handleCalculate = () => {
      const result = eval(input);
      setResult(result.toString());
      setInput('');
  };

  return (
    <div className="container">
      <center>CALCULATOR</center>
      <div className="calculator">
        <div className="display">
          {input || result}
        </div>
        <div className="numbers">
          <button onClick={() => handleClickEvents('7')}>7</button>
          <button onClick={() => handleClickEvents('8')}>8</button>
          <button onClick={() => handleClickEvents('9')}>9</button>
          <button onClick={() => handleClickEvents('4')}>4</button>
          <button onClick={() => handleClickEvents('5')}>5</button>
          <button onClick={() => handleClickEvents('6')}>6</button>
          <button onClick={() => handleClickEvents('1')}>1</button>
          <button onClick={() => handleClickEvents('2')}>2</button>
          <button onClick={() => handleClickEvents('3')}>3</button>
          <button onClick={() => handleClickEvents('.')}><b>.</b></button>
          <button onClick={() => handleClickEvents('0')}>0</button>
          <button className="operator" onClick={() => handleClickEvents('/')}>/</button>
          <button className="operator" onClick={() => handleClickEvents('*')}>x</button>
          <button className="operator" onClick={() => handleClickEvents('-')}>-</button>
          <button className="operator" onClick={() => handleClickEvents('+')}>+</button>
          <button className="operator" onClick={() => handleClickEvents('%')}>%</button>
          <button className="operator" onClick={handleCalculate}>=</button>
          <button className="operator" onClick={handleClear}>AC</button>
        </div>
      </div>
    </div>
  );
}

export default App;
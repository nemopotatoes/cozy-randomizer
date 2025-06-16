import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleGenerate = () => {
    const options = input
      .split(/[\n,]+/) // regex splits input by either new lines or commas (or both), more than one times
      .map(item => item.trim()) // trims spaces from start and end
      .filter(Boolean); // removes empty strings

    if (options.length === 0) {
      setResult('Please enter at least one option ~');
      return;
    }

    const random = options[Math.floor(Math.random() * options.length)];
    setResult(random);
  };

  return (
    <div className="container">
      <h1>cozy randomizer</h1>
      <textarea
        placeholder = "Type in your options, one per line or separated by commas"
        value = {input}
        onChange = {(e) => setInput(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>
      {result && <p className="result">{result}</p>}
    </div>
  )
}

export default App
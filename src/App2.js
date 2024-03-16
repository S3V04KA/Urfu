import { useEffect, useRef, useState } from 'react';
import './App.css';
import Count from './Components/Count';
import IsFive from './Components/isFive';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    document.title = `Ты кликнул на кнопку ${count1} раз!!`;
  })

  const intervalRef = useRef(0);

  function handleStartClick() {
    const intervalId = setInterval(() => {
      console.log('Я подождал');
    }, 1000);
    intervalRef.current = intervalId
  }

  function handleStopClick() {
    const intervalId = intervalRef.current;
    clearInterval(intervalId)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h5>Счётчик 1:</h5>
        <div className='counter'>
          <button onClick={() => setCount1(count1+1)}>+</button>
          <Count id={1} value={count1}/>
        </div>
        <h5>Счётчик 2:</h5>
        <div className='counter'>
          <button onClick={() => setCount2(count2+1)}>+</button>
          <Count id={1} value={count2}/>
          <IsFive value={count2}/>
        </div>
        <button onClick={handleStartClick} onMouseLeave={handleStopClick}>Click me!</button>
      </header>
    </div>
  );
}

export default App;

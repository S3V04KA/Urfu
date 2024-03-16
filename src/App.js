import { useRef, useState } from 'react';
import './App.css';
import Modal from './Components/Modal';
import { createPortal } from 'react-dom';
import ButtonWithTooltip from './Components/ButtonWithTooltip';

function App() {
  const [startTime, setStartTime] = useState(null);
  const [nowTime, setNowTime] = useState(null);

  const [isShowModal, setShowModal] = useState(false);

  const intervalRef = useRef(0);

  function handleStartClick() {
    setStartTime(Date.now())
    setNowTime(Date.now())

    clearInterval(intervalRef.current)
    const intervalId = setInterval(() => {
      setNowTime(Date.now())
    }, 10);
    intervalRef.current = intervalId
  }

  function handleStopClick() {
    const intervalId = intervalRef.current;
    clearInterval(intervalId)
  }

  let secondsPassed = 0;
  if (startTime != null && nowTime != null){
    secondsPassed = (nowTime-startTime)/1000;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Прошло времени: {secondsPassed}</h3>
        <div>
          <button onClick={() => {
            handleStartClick();
          }}>Start</button>
          <ButtonWithTooltip onClick={handleStartClick}>Start</ButtonWithTooltip>
          <button onClick={() => {
            handleStopClick();
            setShowModal(true);
          }}>Stop</button>
          {isShowModal && createPortal(
            <Modal time={secondsPassed} onClose={() => setShowModal(false)}/>,
            document.querySelector('.App-header')
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

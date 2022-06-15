import "./App.css";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import Button from "./Button";
import { useState } from "react";
import { compareHand, generateRandomHand } from "./utils";

function App() {
  const [hand, setHand] = useState("rock");
  const [otherHand, setOtherHand] = useState("rock");
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  function getResult(me, other) {
    const compare = compareHand(me, other);
    if (compare > 0) return "승리";
    if (compare < 0) return "패배";
    return "무승부";
  }

  const handleClick = (value) => {
    const nextHand = value;
    const nextOtherHand = generateRandomHand();
    const nextHistory = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);

    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setHistory([...history, nextHistory]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand("rock");
    setOtherHand("rock");
    setHistory([]);
    setScore(0);
    setOtherScore(0);
  };

  function handleBetChange(e) {
    const nextBet = e.target.value;
    setBet(Number(nextBet));
  }

  return (
    <div>
      <div>
        <h1 className="App-title">가위 바위 보 게임</h1>
        <p className="sub-title">"컴퓨터를 상대로 이겨보아요!"</p>
      </div>
      <div className="App">
        <Button onClick={handleClearClick} className="App-reset">
          👻 처음부터
        </Button>
        <p className="score-title">점수</p>
        <p className="score">
          {score} : {otherScore}
        </p>
        <div className="bet-wrap">
          <p>배점</p>
          <input
            className="bet-input"
            onChange={handleBetChange}
            value={bet}
            type="number"
            min={1}
            max={9}
          ></input>
          <p>배</p>
        </div>

        <h2 className="result">{getResult(hand, otherHand)}</h2>
        <div className="hand-icon-wrap">
          <div className="hand-icon">
            <p className="hand-icon-title">나</p>
            <HandIcon value={hand}></HandIcon>
          </div>
          <div className="hand-icon">
            <p className="hand-icon-title">컴퓨터</p>
            <HandIcon value={otherHand}></HandIcon>
          </div>
        </div>

        <p className="history-title">승부 기록</p>
        <p className="history"> {history.join(" / ")}</p>

        <div className="btn-wrap">
          <HandButton value="rock" onClick={handleClick} />
          <HandButton value="paper" onClick={handleClick} />
          <HandButton value="scissor" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;

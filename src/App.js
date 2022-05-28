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
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <h2>{getResult(hand, otherHand)}</h2>
      <div>
        <HandIcon value={hand}></HandIcon>
        VS
        <HandIcon value={otherHand}></HandIcon>
      </div>
      <input
        onChange={handleBetChange}
        value={bet}
        type="number"
        min={1}
        max={9}
      ></input>
      <p>승부 기록 : {history.join(" / ")}</p>
      <p>
        {score} : {otherScore}
      </p>
      <Button onClick={handleClearClick} className="App-reset">
        처음부터
      </Button>
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
    </div>
  );
}

export default App;

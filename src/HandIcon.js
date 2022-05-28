import rockIcon from "./assets/rock.svg";
import paperIcon from "./assets/paper.svg";
import scissorIcon from "./assets/scissor.svg";

const ICON = {
  rock: "✊",
  paper: "🖐",
  scissor: "✌️",
};

function HandIcon({ value }) {
  const src = ICON[value];
  // value === "rock" ? rockIcon : value === "paper" ? paperIcon : scissorIcon;
  return (
    // <img className="hand-icon-img" src={src} alt={value}></img>
    <div className="hand-icon-img">{src}</div>
  );
}

export default HandIcon;

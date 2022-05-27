import rockIcon from "./assets/rock.svg";
import paperIcon from "./assets/paper.svg";
import scissorIcon from "./assets/scissor.svg";

const ICON = {
  rock: rockIcon,
  paper: paperIcon,
  scissor: scissorIcon,
};

function HandIcon({ value }) {
  const src = ICON[value];
  // value === "rock" ? rockIcon : value === "paper" ? paperIcon : scissorIcon;
  return <img src={src} alt={value}></img>;
}

export default HandIcon;

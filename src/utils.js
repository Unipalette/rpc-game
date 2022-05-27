//1. 랜덤하게 나오는 상대방 가위바위보 패
const HANDS = ["rock", "paper", "scissor"];
function random(n) {
  return Math.floor(Math.random() * n);
}
export function generateRandomHand() {
  const index = random(HANDS.length);
  return HANDS[index];
}
//2. 승패를 알려줄 함수
const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};
export function compareHand(a, b) {
  if (WINS[a] === b) return 1;
  if (WINS[b] === a) return -1;
  return 0;
}

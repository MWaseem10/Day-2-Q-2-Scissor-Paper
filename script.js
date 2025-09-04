const moves = ["rock", "paper", "scissors"];
let user = 0, cpu = 0;

const out = document.getElementById('out');
const score = document.getElementById('score');

document.body.addEventListener('click', e => {
  if (!e.target.dataset.move) return;

  const userMove = e.target.dataset.move;
  const cpuMove = moves[Math.floor(Math.random() * 3)];

  let result = "Draw";
  if (
    (userMove === "rock" && cpuMove === "scissors") ||
    (userMove === "paper" && cpuMove === "rock") ||
    (userMove === "scissors" && cpuMove === "paper")
  ) {
    result = "You win!";
    user++;
  } else if (userMove !== cpuMove) {
    result = "CPU wins!";
    cpu++;
  }

  out.textContent = `You: ${userMove} | CPU: ${cpuMove} → ${result}`;
  score.textContent = `${user} : ${cpu}`;
});

let score = 0;

let homeScore = document.getElementById("home-score-el");

let guestScore = document.getElementById("guest-score-el");

function increment() {
  score++;
  alert(score);
}

let add1 = document.getElementById("homeincrement1");
add1.addEventListener("click", increment());
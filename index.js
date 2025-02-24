let homeScore = 0;
let guestScore = 0;
let homeScoreDisplay = document.getElementById("home-score-el");
let guestScoreDisplay = document.getElementById("guest-score-el");

let addTwo = document.getElementById("homeTwo")
addTwo.addEventListener("click", homeIncrement())

let addThree = document.getElementById("homeThree")
addThree.addEventListener("click", homeIncrement())

function h1 () {
homeScore += 1
homeScoreDisplay.innerText = homeScore
}
      function h2 () {
        homeScore += 2
      homeScoreDisplay.innerText = homeScore
      }   

      function h3 () {
        homeScore += 3
      homeScoreDisplay.innerText = homeScore
      }

      function g1 () {
        guestScore += 1
      guestScoreDisplay.innerText = guestScore
      }

      function g2 () {
  guestScore += 2
  guestScoreDisplay.textContent = guestScore
}
function g3 () {
  guestScore += 3
  guestScoreDisplay.textContent = guestScore
}


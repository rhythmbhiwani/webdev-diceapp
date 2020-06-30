var randomNumber1 = Math.floor(Math.random()*6)+1;
var image1 = document.getElementsByClassName("img1")[0];
image1.setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random()*6)+1;
var image2 = document.getElementsByClassName("img2")[0];
image2.setAttribute("src","images/dice"+randomNumber2+".png");

var heading = document.querySelector("h1");

if (randomNumber1>randomNumber2) {
  heading.innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1<randomNumber2) {
  heading.innerHTML = "Player 2 Wins!🚩";
} else {
  heading.innerHTML = "Draw!";
}

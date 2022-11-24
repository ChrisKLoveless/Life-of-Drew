window.onload = function() {
  let body = document.querySelector("body")
  
  let darkbutton = document.getElementById("dark-mode");
  darkbutton.onclick = function() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  };

  let lightbutton = document.getElementById("light-mode");
  lightbutton.onclick = function() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  };

  let largebutton = document.getElementById("large-mode");
  largebutton.onclick = function() {
    body.style.fontSize = "24px";
  };

  let tinybutton = document.getElementById("tiny-mode");
  tinybutton.onclick = function() {
    body.style.fontSize = "10px";
  };
}
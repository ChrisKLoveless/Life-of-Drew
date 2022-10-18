window.onload = function() {
  let body = document.querySelector("body")
  
  let darkbutton = document.querySelector("button.btn.btn-dark");
  darkbutton.onclick = function() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  };

  let lightbutton = document.querySelector("button.btn.btn-light");
  lightbutton.onclick = function() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  };

  let largebutton = document.querySelector("button.Large.Font");
  largebutton.onclick = function() {
    body.style.fontSize = "24px";
  };

  let tinybutton = document.querySelector("button.Tiny.Font");
  tinybutton.onclick = function() {
    body.style.fontSize = "10px";
  };
}
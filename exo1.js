const gras = document.getElementById("gras");
const italic = document.getElementById("italic");
const surligne = document.getElementById("surligne");
const clear = document.getElementById("clear");
const p = document.querySelector("p");

gras.addEventListener("click", () => {
  if (p.style.fontWeight == "normal") {
    p.style.fontWeight = "bold";
  } else {
    p.style.fontWeight = "normal";
  }
});

italic.addEventListener("click", () => {
  if (p.style.fontStyle == "normal") {
    p.style.fontStyle = "italic";
  } else {
    p.style.fontStyle = "normal";
  }
});

surligne.addEventListener("click", () => {
  if (p.style.textDecoration == "none") {
    p.style.textDecoration = "underline";
  } else {
    p.style.textDecoration = "none";
  }
});

clear.addEventListener("click", () => {
  p.style.fontWeight = "normal";
  p.style.fontStyle = "normal";
  p.style.textDecoration = "none";
});

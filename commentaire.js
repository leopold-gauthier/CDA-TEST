var bouton = document.querySelector("button");
bouton.addEventListener("click", addCommentaire);

function addCommentaire() {
  var textarea = document.querySelector("textarea");
  var result = document.getElementById("result");
  result.innerHTML += "<p>" + textarea.value + "</p>";
  textarea.value = "";
}

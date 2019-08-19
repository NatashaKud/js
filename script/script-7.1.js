var blockParal = document.getElementsByClassName("block-paral");

function paral() {
  var scrollPosition = window.scrollY;
  console.log(scrollPosition);
}
document.addEventListener("scroll", paral)
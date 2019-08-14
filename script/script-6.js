//1 изменение стилей блоков при нажатии
var block1 = document.getElementsByClassName("box")[0];
block1.onclick = function changeYellow() {
  block1.style.backgroundColor = "red",
  block1.style.border = "none",
  block1.style.color = "white"
}

var block2 = document.getElementsByClassName("box")[1];
function changeBlue() {
  block2.style.backgroundColor = "green",
  block2.style.border = "none",
  block2.style.fontSize = "25px"
}
block2.addEventListener("click", changeBlue);

//2 добавление блока при нажатии
var block3 = document.getElementsByClassName("box")[2];
function showBlock() {
  var hiddenBlock = document.createElement("div"); //создаю блок и описываю его стили
  hiddenBlock.style.height = "150px";
  hiddenBlock.style.width = "150px";
  hiddenBlock.style.border = "1px solid black";
  hiddenBlock.style.margin = "10px";
  block3.after(hiddenBlock); //ставлю новый блок после третьего
}
block3.addEventListener("click", showBlock, {once: true}); //добавление блока при клике единожды

//3
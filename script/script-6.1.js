//контекcтное меню
var menu = document.getElementById("menu");            //отображение контекстного меню при правом клике
function context(event) {
  menu.style.opacity = "1";
  menu.style.top = event.clientY + "px";
  menu.style.left = event.clientX + "px";
}
window.addEventListener("contextmenu", context);

// function hiddenMenu() {                             //скрытие контекстного меню при левом клике
//   menu.style.opacity = "0";
// }
// window.addEventListener("click", hiddenMenu);

function hiddenMenuEsc(e) {                            //скрытие контекстного меню при нажатие на ESC
  if (e.keyCode === 27) {
    menu.style.opacity = "0";
  }
}
window.addEventListener("keydown", hiddenMenuEsc);

//добавление квадрата
var menuContent1 = document.getElementsByClassName("menulink")[0];
var square
function showSquare() {
  square = document.createElement("div"); 
  square.style.height = "150px";
  square.style.width = "150px";
  square.style.backgroundColor = "black";
  square.style.position = "absolute";
  square.style.top = event.clientY + "px";
  square.style.left = event.clientX + "px";
  document.body.append(square);

  function hiddenSquare() {                           //удаление квадрата
    square.style.display = "none";
  }
  menuContent1.addEventListener("click", hiddenSquare);
}
menuContent1.addEventListener("click", showSquare, {once: true});


//анимация квадрата
var menuContent2 = document.getElementsByClassName("menulink")[1];
function animSquare() {
  square.classList.add("square-anim");
}
menuContent2.addEventListener("click", animSquare);

//добавление треугольника
var menuContent3 = document.getElementsByClassName("menulink")[2];
var triangle
function showTriangle() {
  triangle = document.createElement("div"); 
  triangle.innerHTML = "▲";
  triangle.style.fontSize = "200px";
  triangle.style.textShadow = "0 0 20px black";
  triangle.style.position = "absolute";
  triangle.style.top = event.clientY + "px";
  triangle.style.left = event.clientX + "px";
  document.body.append(triangle);

  function hiddenTriangle() {                           //удаление треугольника
    triangle.style.display = "none";
  }
  menuContent3.addEventListener("click", hiddenTriangle);
}
menuContent3.addEventListener("click", showTriangle, {once: true});

//анимация треугольника
var menuContent4 = document.getElementsByClassName("menulink")[3];
function animTriangle() {
  function an() {
    triangle.style.top = event.clientY + "px";
    triangle.style.left = event.clientX + "px";
    triangle.style.transition = "2s";
  }
  document.addEventListener("mousemove", an);
}
menuContent4.addEventListener("click", animTriangle);

//очистить
var menuContent5 = document.getElementsByClassName("menulink")[4];
function clear() {
  square.remove();
  triangle.remove();
}
menuContent5.addEventListener("click", clear);
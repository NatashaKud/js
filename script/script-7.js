//1 
var inputDo = document.getElementById("do");                        //добавление
var buttonDo = document.getElementById("button-do");
var list = document.getElementById("list");
var delo;
buttonDo.onclick = function plusDo() {
  delo = document.createElement("li");
  delo.innerHTML = inputDo.value;
  list.insertAdjacentElement("beforeend", delo);
  inputDo.value = "";
}

var inputDelete = document.getElementById("delete");               //удаление
var buttonDelete = document.getElementById("button-delete");
buttonDelete.onclick = function minusDo() {
  var i = inputDelete.value - 1;
  list.childNodes[i].remove();
  inputDelete.value = "";
}

var inputEditNumber = document.getElementById("edit-number");      //изменение
var inputEditText = document.getElementById("edit");
var buttonEdit = document.getElementById("button-edit");
buttonEdit.onclick = function edit() {
  var i = inputEditNumber.value - 1;
  list.childNodes[i].innerHTML = inputEditText.value;
  inputEditNumber.value = "";
  inputEditText.value = "";
}

//2 из цельсия в фаренгейт
var input = document.getElementById("input");
input.oninput = function() {
  var c = input.value;
  document.getElementById("result").innerHTML = Number(c) * (9/5) + 32;
}


//3 любая анимация на js
var circle = document.createElement("div");    //серый
circle.style.height = "70px";
circle.style.width = "70px";
circle.style.backgroundColor = "grey";
circle.style.borderRadius = "50%";
circle.style.position = "absolute";
circle.style.left = "200px";
circle.style.top = "400px";
document.body.append(circle);

var moveCircle = [
  {
    transform: 'translateY(0)',
  },
  {
    transform: 'translateY(100px)',
  },
  {
    transform: 'translate(100px, -100px)',
  },
  {
    transform: 'translate(200px, 100px)',
  },
  {
    transform: 'translate(300px, -90px)',
  },
  {
    transform: 'translate(400px, 100px)',
  },
  {
    transform: 'translate(500px, -70px)',
  },
  {
    transform: 'translate(0, -70px)',
  },
  {
    transform: 'translate(0, 0)',
  },
]

circle.animate(moveCircle, {
  duration: 5000,
  iterations: Infinity,
})

var circle2 = document.createElement("div");    //красный
circle2.style.height = "100px";
circle2.style.width = "100px";
circle2.style.backgroundColor = "red";
circle2.style.position = "absolute";
circle2.style.left = "500px";
circle2.style.top = "400px";
document.body.insertAdjacentElement("beforeend", circle2);
function kub() {
  circle2.style.transform = "translateX(300px)";
  circle2.style.backgroundColor = "black";
  circle2.style.opacity = "0";
}
setInterval(kub, 1000);

function kub1() {
  circle2.style.transform = "translateX(-300px)";
  circle2.style.transition = "2s";
  circle2.style.opacity = "1";
}
setInterval(kub1, 3000);

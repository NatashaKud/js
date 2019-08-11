//1
//создала новый блок с классом block-js
var div = document.createElement("div");
div.className = "block-js";
//добавила в него текст
var text = document.createTextNode("Создала блок на js");
div.appendChild(text);
//добавила в него картинку
var img = document.createElement('div');
img.style.backgroundImage = "url(./img/js.png)";
img.style.height = "150px";
img.style.width = "150px";
div.appendChild(img);
//добавила новый блок в конец body
document.body.append(div);

//тоже самое, но другим способом
// var div = document.createElement("div"); //создаем div
// div.className = "block-js"; //присваиваем ему класс
// div.innerHTML = "Создала блок на js <img src='./img/js.png'>"; //наполняем содержимым
// document.body.append(div); //добавляем в конец body

//2 вывод в консоль содержимое второго блока
console.log(document.getElementsByClassName("block")[1].innerHTML);

//3 добавила два новых класса первому блоку
var block1 = document.getElementsByClassName("block")[0];
block1.classList.add("border", "bgcolor");
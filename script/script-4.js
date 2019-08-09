//третье дз с испольванием функций
//1.1
function showUser() {
  user = {
    name: prompt("Введите имя"),
    age: prompt("Введите возраст"),
  }
  console.log(user);
}
showUser() 

//1.2 и 1.3 массив в обратном порядке, используя специальную функцию reverse()
var arr = [];
arr[0] = prompt("Введите элемент");
arr[1] = prompt("Введите элемент");
arr[2] = prompt("Введите элемент");
arr[3] = prompt("Введите элемент");
arr[4] = prompt("Введите элемент");
arr.reverse();
console.log(arr);

//1.4



//2
var text = prompt("Введите текст");
function capitalLetter(up) {
  return up.toUpperCase();
}
var newText = text.replace(/\.\s\S/g, capitalLetter);
console.log(newText);

//3
var text = "В лесу была хорошая погода. Кукушка куковала.";
var trimtext = text.substr(0, 27);
console.log(trimtext);

//4
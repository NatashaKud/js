//1
var user = {
  name: prompt("Введите имя"),
  age: prompt("Введите возраст"),
}
console.log(user);

//2 с помощью for
var arr = [];
arr[0] = prompt("Введите элемент");
arr[1] = prompt("Введите элемент");
arr[2] = prompt("Введите элемент");
arr[3] = prompt("Введите элемент");
arr[4] = prompt("Введите элемент");
for (i = 4; i >= 0; i--) {
 console.log(arr[i]); 
}

//2 с помощью while
var arr = [];
arr[0] = prompt("Введите элемент");
arr[1] = prompt("Введите элемент");
arr[2] = prompt("Введите элемент");
arr[3] = prompt("Введите элемент");
arr[4] = prompt("Введите элемент");
var i = 4;
while (i >= 0) {
  console.log(arr[i]);
  i--;
}

//3
var volume = prompt("Введите количество товара");
var a = 0;
while (a < Number(volume)) {
  var product = {
    name: prompt("Введите название товара"),
    price: prompt("Введите цену товара"),
  }
  if (isNaN(product.price)) { 
    alert("Вы ввели не число!");
  }
  console.log(product);
  a++;
}



//1
console.log("'25' == 25", "25" == 25);
console.log("'10' < 25", "10" < 25);
console.log("'10' > null", "10" > null);
console.log("'25' > undefined", "25" > undefined);
console.log("25 > undefined", 25 > undefined);
console.log("false > 1", false > 1);
console.log("false < 1", false < 1);
console.log("true >= 1", true >= 1);
console.log("false == null", false == null);
console.log("undefined == false", undefined == false);
console.log("undefined !== false", undefined !== false);
console.log("undefined == null", undefined == null);
console.log("undefined < null", undefined < null);
console.log("null == 0", null == 0);
console.log("null > 0", null > 0);
console.log("null !== 0", null !== 0);
console.log("null >= 0", null >= 0);
console.log("null < 3", null < 3);
console.log("null > -3", null > -3);

//2
var x = prompt("Введите первое однозначное число");
var y = prompt("Введите второе однозначное число");
if (x >= 10 || y >= 10) {
  alert("Одно из чисел не однозначное!");
} else if (x > y) {
  alert("Наибольшее из них " + x);
} else if (x < y) {
  alert("Наибольшее из них " + y);
} else {
  alert("Числа равны");
}

//3
var a = prompt("Введите первую букву");
var b = prompt("Введите вторую букву");
a = a.toLowerCase();
b = b.toLowerCase();
if (a < b) {
  alert("Первее в алфавите встречается " + a);
} else if (a > b) {
  alert("Первее в алфавите встречается " + b);
} else {
  alert("Буквы одинаковы");
}



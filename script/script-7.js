//1

//2 из цельсия в фаренгейт
var input = document.getElementById("input");
input.oninput = function() {
  var c = input.value;
  document.getElementById("result").innerHTML = Number(c) * (9/5) + 32;
}


//3 любая анимация на js
var circle = document.createElement("div"); 
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

// дата
var input = document.getElementById("input");
function enterDate(event) {                            
  if (event.keyCode === 13) {
    function result() {
      var enteredDate = new Date(input.value).getTime();
      var nowDate = new Date().getTime();
      var calcDate = new Date(enteredDate - nowDate); 
      var days = Math.floor(calcDate/1000/60/60/24);
      var hours = Math.floor((calcDate/1000/60/60)%24);
      var minutes = Math.floor((calcDate/1000/60)%60);
      var second = Math.floor((calcDate/1000)%60);
      document.getElementById("result").innerHTML = days + " дн., " + hours + " ч., " + minutes + " мин., " + second + " сек.";
    }
    setInterval(result, 1000);
  }
}
document.addEventListener('keydown', enterDate)

// лампочки
var black = document.getElementsByClassName("lamp__black")[0];
var lampBgc = document.getElementsByClassName("lamp")[0];
black.onmouseover = function a() {
  black.classList.toggle("lamp__black");
  black.classList.toggle("lamp__black-on");
  lampBgc.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  lampBgc.style.transition = "1s";
}
black.onmouseout = function a() {
  black.classList.toggle("lamp__black");
  black.classList.toggle("lamp__black-on");
  lampBgc.style.backgroundColor = "white";
  lampBgc.style.transition = "1s";
}

var yellow = document.getElementsByClassName("lamp__yellow")[0];
yellow.onmouseover = function a() {
  yellow.classList.toggle("lamp__yellow");
  yellow.classList.toggle("lamp__yellow-on");
  lampBgc.style.backgroundColor = "rgba(239, 206, 74, 0.5)";
  lampBgc.style.transition = "1s";
}
yellow.onmouseout = function a() {
  yellow.classList.toggle("lamp__yellow");
  yellow.classList.toggle("lamp__yellow-on");
  lampBgc.style.backgroundColor = "white";
  lampBgc.style.transition = "1s";
}

var blue = document.getElementsByClassName("lamp__blue")[0];
blue.onmouseover = function a() {
  blue.classList.toggle("lamp__blue");
  blue.classList.toggle("lamp__blue-on");
  lampBgc.style.backgroundColor = "rgba(66, 141, 255, 0.5)";
  lampBgc.style.transition = "1s";
}
blue.onmouseout = function a() {
  blue.classList.toggle("lamp__blue");
  blue.classList.toggle("lamp__blue-on");
  lampBgc.style.backgroundColor = "white";
  lampBgc.style.transition = "1s";
}

// параллакс
var parallaxOver = document.getElementsByClassName("parallax__page")[0];
var parallaxShadow = document.getElementsByClassName("parallax__shadow")[0];
var parallaxText = document.getElementsByClassName("parallax__text")[0];
parallaxOver.onmouseover = function parallaxChangeOver() {                       // увеличение при наведении
  parallaxOver.style.transform = "scale(1.2, 1.2)";
  parallaxShadow.style.opacity = "0";
  parallaxShadow.style.transition = "2s";
  parallaxOver.style.transition = "2s";
}
parallaxOver.onmouseout = function parallaxChangeOver() {                       // уменьшение при наведении
  parallaxOver.style.transform = "scale(1, 1)";
  parallaxShadow.style.opacity = "1";
  parallaxShadow.style.transition = "2s";
  parallaxOver.style.transition = "2s";
}

window.onscroll = function parallaxScrol() {
  var scroll = window.pageYOffset;
  console.log(scroll);
  var s = 700;
  var w = 1400;
  if ((scroll == s) || (scroll < w)) {
    parallaxOver.style.transform = "translateY(-50px)";
    parallaxText.style.transform = "translateY(30px)";
    parallaxText.style.transition = "3s";
    parallaxOver.style.transition = "2s";
  }

  if ((scroll == w) || (scroll > s)) {
    parallaxOver.style.transform = "translateY(50px)";
    parallaxText.style.transform = "translateY(-30px)";
    parallaxText.style.transition = "3s";
    parallaxOver.style.transition = "2s";
  }
}

// слайдер
var clickRight = document.getElementsByClassName("slider__pointer-right")[0];
var clickLeft = document.getElementsByClassName("slider__pointer-left")[0];
var slide = document.getElementsByClassName("slider__page-wrap")[0];
var circleOne = document.getElementsByClassName("slider__circle1")[0];
var circleTwo = document.getElementsByClassName("slider__circle2")[0];
var circleThree = document.getElementsByClassName("slider__circle3")[0];

clickRight.addEventListener("click", right);
function right() {
  slide.style.transform = "translateX(-780px)";       // движение слайда
  slide.style.transition = "0.5s";
  circleTwo.style.background = "#3590CC";             // изменение круглых переключателей
  circleOne.style.background = "#9C9C9C";
  circleThree.style.background = "#9C9C9C";
  this.removeEventListener("click", right);
  this.addEventListener("click", rightLes);
  function rightLes() { 
    slide.style.transform = "translateX(-1560px)";   
    slide.style.transition = "0.5s";
    circleThree.style.background = "#3590CC";        
    circleTwo.style.background = "#9C9C9C";
    circleOne.style.background = "#9C9C9C";
  }
}

clickLeft.addEventListener("click", left);
function left() {
  slide.style.transform = "translateX(-780px)";
  slide.style.transition = "0.5s";
  circleTwo.style.background = "#3590CC";
  circleOne.style.background = "#9C9C9C";
  circleThree.style.background = "#9C9C9C";
  this.removeEventListener("click", left);
  this.addEventListener("click", lefttLes);
  function lefttLes() {
    slide.style.transform = "translateX(0px)";
    slide.style.transition = "0.5s";
    circleOne.style.background = "#3590CC";
    circleTwo.style.background = "#9C9C9C";
    circleThree.style.background = "#9C9C9C";
  }
}

// круглые переключатели у слайда
function sliderCircleOne() {
  circleOne.style.background = "#3590CC";
  circleTwo.style.background = "#9C9C9C";
  circleThree.style.background = "#9C9C9C";
  slide.style.transform = "translateX(0px)";
  slide.style.transition = "0.5s";
}
circleOne.addEventListener("click", sliderCircleOne);

function sliderCircleTwo() {
  circleTwo.style.background = "#3590CC";
  circleOne.style.background = "#9C9C9C";
  circleThree.style.background = "#9C9C9C";
  slide.style.transform = "translateX(-780px)";
  slide.style.transition = "0.5s";
}
circleTwo.addEventListener("click", sliderCircleTwo);

function sliderCircleThree() {
  circleThree.style.background = "#3590CC";
  circleTwo.style.background = "#9C9C9C";
  circleOne.style.background = "#9C9C9C";
  slide.style.transform = "translateX(-1560px)";
  slide.style.transition = "0.5s";
}
circleThree.addEventListener("click", sliderCircleThree);
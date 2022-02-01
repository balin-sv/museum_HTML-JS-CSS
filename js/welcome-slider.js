const welcomeSlider = [
  "./assets/welcome-slider/1.jpg",
  "./assets/welcome-slider/2.jpg",
  "./assets/welcome-slider/3.jpg",
  "./assets/welcome-slider/4.jpg",
  "./assets/welcome-slider/5.jpg",
];

const notActiveDot = "./assets/welcome-slider/slide.svg";
const activeDot = "./assets/welcome-slider/active-slide.svg";
let indexOfActualSlide = 0;
let sliderBackgroundImg = document.getElementById("welcome-slider");
let dotsBox = document.getElementById("dots");
let arrowPrev = document.getElementById("arrow-left");
let arrowNext = document.getElementById("arrow-right");
let totalNumberOfSlides = document.getElementById("total-num");
totalNumberOfSlides.innerHTML = welcomeSlider.length;
let actualSlideNumber = document.getElementById("actual-num");
actualSlideNumber.innerHTML = 1;

let firstLoadSlider = printSlider(sliderBackgroundImg);
let firstLoadDotsList = printDots(dotsBox);

firstLoadDotsList.forEach((element) => {
  element.addEventListener("click", showThisSlide);
});

arrowNext.addEventListener("click", showNextSlide);
arrowPrev.addEventListener("click", showPrevSlide);

function printSlider(slide) {
  slide.style.background = `url(${welcomeSlider[0]}) right/contain no-repeat`;
  return slide;
}

function printDots(dotsBox) {
  for (let i = 0; i < welcomeSlider.length; i++) {
    let div = document.createElement("div");
    div.className = `dots__item`;
    let img = document.createElement("img");
    img.className = `dots__item-src ${i}`;
    if (i === 0) {
      img.src = activeDot;
    } else {
      img.src = notActiveDot;
    }
    div.append(img);
    dotsBox.append(div);
  }
  let dotsBoxItems = document.querySelectorAll(".dots__item-src");

  return dotsBoxItems;
}

function showNextSlide() {
  if (indexOfActualSlide === welcomeSlider.length - 1) {
    indexOfActualSlide = 0;
  } else {
    indexOfActualSlide++;
  }
  firstLoadSlider.style.background = `url(${welcomeSlider[indexOfActualSlide]}) right/contain no-repeat`;

  changeDot(indexOfActualSlide);
  changeSlideNumber(indexOfActualSlide);
}

function showPrevSlide() {
  if (indexOfActualSlide === 0) {
    indexOfActualSlide = welcomeSlider.length - 1;
  } else {
    indexOfActualSlide--;
  }
  firstLoadSlider.style.background = `url(${welcomeSlider[indexOfActualSlide]}) right/contain no-repeat`;

  changeDot(indexOfActualSlide);
  changeSlideNumber(indexOfActualSlide);
}

function changeDot(index) {
  for (let i = 0; i < firstLoadDotsList.length; i++) {
    if (firstLoadDotsList[i].classList.contains(`${+index}`)) {
      firstLoadDotsList[i].src = activeDot;
    } else {
      firstLoadDotsList[i].src = notActiveDot;
    }
  }
}

function changeSlideNumber(index) {
  actualSlideNumber.innerHTML = "";
  actualSlideNumber.innerHTML = index + 1;
}

function showThisSlide(e) {
  for (let i = 0; i < welcomeSlider.length; i++) {
    if (e.target.classList.contains(`${+i}`)) {
      firstLoadSlider.style.background = `url(${welcomeSlider[i]}) 
      right/contain no-repeat`;
      indexOfActualSlide = i;

      changeDot(i);
      changeSlideNumber(i);
    }
  }
}

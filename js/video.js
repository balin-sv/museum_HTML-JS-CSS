const toggle = document.querySelector(".video-controls__play-btn");
const videoProgress = document.querySelector(".video-controls__progress-line");
const video = document.querySelector(".viewer");
const volumeInput = document.querySelector(".video-controls__volume-progress");
const fullScreen = document.querySelector(".video-controls__full-screen");
const volume = document.querySelector(".video-controls__volume");
const videoSlider = document.querySelectorAll(".video-item");
const videoSliderArray = Array.from(videoSlider);

video.src = videoSliderArray[0].src;
video.poster = videoSliderArray[0].poster;

videoSliderArray.forEach((element) => {
  element.addEventListener("click", playStop);
});

let mousedown = false;
video.ontimeupdate = progressUpdate;

toggle.addEventListener("click", toggleFunc);
video.addEventListener("click", toggleFunc);

volume.addEventListener("click", muteUnmute);
volumeInput.addEventListener("input", changeVolume);
fullScreen.addEventListener("click", changeScreen);
videoProgress.onclick = changeVideo;
videoProgress.addEventListener("mosedown", () => (mousedown = true));
videoProgress.addEventListener("moseup", () => (mousedown = false));
videoProgress.addEventListener("mousemove", () => {
  if (mousedown) {
    changeVideo(e);
  }
});

const videoDots = document.querySelectorAll(".video__pagination-dot");
videoDots.forEach((element) => {
  element.addEventListener("click", switchSlide);
});
let actualSlide = videoSliderArray[0];
let actualSlideDot = videoDots[0];
let actualVideoIndex = 0;

function switchSlide() {
  for (let i = 0; i < videoDots.length; i++) {
    videoDots[i].style.background = "#999999";
    if (videoDots[i] === this) {
      actualVideoIndex = i;
    }
  }
  this.style.background = "#333333";
}

/*---------------------functions*/

function toggleFunc() {
  for (let i = 0; i < videoSliderArray.length; i++) {
    videoSliderArray[i].pause();
  }
  if (video.paused) {
    video.play();
    toggle.style.background = `url("./assets/video/pause.svg") center no-repeat`;
  } else {
    toggle.style.background = `url("./assets/video/Group.svg") center no-repeat`;
    video.pause();
  }
}

function playStop() {
  video.src = this.src;
  video.poster = this.poster;
  video.currentTime = 0;
  videoProgress.value = 0;

  for (let i = 0; i < videoSliderArray.length; i++) {
    if (this === videoSliderArray[i]) {
      continue;
    } else {
      videoSliderArray[i].pause();
    }
  }
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
}

function muteUnmute() {
  if (video.muted) {
    video.muted = false;
    volume.style.background = `url("./assets/video/volume.svg") center no-repeat`;
  } else {
    video.muted = true;
    volume.style.background = `url("./assets/video/mute.svg") center no-repeat`;
  }
}

function changeScreen() {
  video.requestFullscreen();
}

function changeVolume() {
  let v = this.value;
  video.volume = v / 100;
}

function progressUpdate() {
  let d = video.duration;
  let c = video.currentTime;
  console.log(videoProgress.value);
  videoProgress.value = (c / d) * 100;
}

function changeVideo(e) {
  const clickTime = (e.offsetX / videoProgress.offsetWidth) * video.duration;
  video.currentTime = clickTime;
}

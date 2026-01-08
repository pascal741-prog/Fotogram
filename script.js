// #region global variablen

const OverlayRef = document.getElementById("overlay");

const imgFiles = [
  "./img/frozen lake.jpg",
  "./img/city-at-night.jpg",
  "./img/clouds.png",
  "./img/bird.jpg",
  "./img/hurrican.jpg",
  "./img/snow-mountain.jpg",
  "./img/duck.jpg",
  "./img/nightsky.jpg",
  "./img/bird2.jpg",
  "./img/leopards.jpg",
  "./img/winter-mountain.jpg",
  "./img/winter-tree.jpg",
];

let currentIndex = 0;

// #endregion global variablen
// #region overlay
// #region open dialog
function openOverlay(index) {
  const OverlayRef = document.getElementById("overlay");

  currentIndex = index;
  counter();
  OpenCurrentPicture();
  countCurrentPicture();
  showDescription();
  OverlayRef.showModal();
}
// #endregion open dialog
// #region close-Dialog

function closeOverlay() {
  const OverlayRef = document.getElementById("overlay");

  OverlayRef.close();
}
// #endregion close-Dialog
// #region counter
function counter() {}
// #endregion counter
// #region open selected Photo
function OpenCurrentPicture() {
  const openPicture = document.getElementById("currentPicture");
  openPicture.src = imgFiles[currentIndex];
  openPicture.alt = document.querySelectorAll("#content img")[currentIndex].alt;
}
// #endregion open selected Photo
// #region picture count output
function countCurrentPicture() {
  const counter = document.getElementById("counter");
  counter.textContent = `${currentIndex + 1} / ${imgFiles.length}`;
}
// #endregion picture count output
// #region switch picture left
function switchSelectedPhotoLeft() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = imgFiles.length - 1;
  }
  OpenCurrentPicture();
  countCurrentPicture();
  showDescription();
}
//#endregion switch picture left
// #region switch picture right
function switchSelectedPhotoRight() {
  if (currentIndex < imgFiles.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  OpenCurrentPicture();
  countCurrentPicture();
  showDescription();
}
// #endregion switch picture right
// #region show img description
const thumbnails = document.querySelectorAll("#content img");

function showDescription() {
  const openPicture = document.getElementById("currentPicture");
  const titleRef = document.getElementById("imgTitle");
  titleRef.textContent = openPicture.alt;
}
// #endregion show img description
// #region randomizer
function randomizePhotos() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * imgFiles.length);
  } while (randomIndex === currentIndex);

  currentIndex = randomIndex;

  OpenCurrentPicture();
  countCurrentPicture();
  showDescription();
}
// #endregion randomizer
// #endregion Overlay
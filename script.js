
const OverlayRef = document.getElementById('overlay')

const imgFiles = [
    './img/bird.jpg',
    './img/bird2.jpg',
    './img/city-at-night.jpg',
    './img/clouds.png',
    './img/duck.jpg',
    './img/frozen lake.jpg',
    './img/hurrican.jpg',
    './img/leopards.jpg',
    './img/nightsky.jpg',
    './img/snow-mountain.jpg',
    './img/winter-mountain.jpg',
    './img/winter-tree.jpg',
];

let currentIndex = 0;

// Dialog öffnen 

function openOverlay(index) {
    const OverlayRef = document.getElementById('overlay');
    
    currentIndex = index;
    OverlayRef.showModal();
    counter();
    // OpenCurrentPicture();
}

function closeOverlay() {
  const OverlayRef = document.getElementById('overlay');
  
    OverlayRef.close();
}

function counter () {
    console.log (currentIndex);
}

function OpenCurrentPicture () {
    const openPicture = document.getElementById("currentPicture");
    
    openPicture.src = imgFiles[currentIndex];

}

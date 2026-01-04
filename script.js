
const OverlayRef = document.getElementById('overlay')

const imgFiles = [
    './img/frozen lake.jpg',
    './img/city-at-night.jpg',
    './img/clouds.png',
    './img/bird.jpg',
    './img/hurrican.jpg',
    './img/snow-mountain.jpg',
    './img/duck.jpg',
    './img/nightsky.jpg',
    './img/bird2.jpg',
    './img/leopards.jpg',
    './img/winter-mountain.jpg',
    './img/winter-tree.jpg',
];

let currentIndex = 0;

// open dialog  

function openOverlay(index) {
    const OverlayRef = document.getElementById('overlay');
    
    currentIndex = index;
    OverlayRef.showModal();
    counter();
    OpenCurrentPicture();
}

// close Dialog 
function closeOverlay() {
  const OverlayRef = document.getElementById('overlay');
  
    OverlayRef.close();
}

function counter () {
    console.log (currentIndex);
}

// open selected Photo 

function OpenCurrentPicture () {
    const openPicture = document.getElementById("currentPicture");
    
    openPicture.src = imgFiles[currentIndex];

}

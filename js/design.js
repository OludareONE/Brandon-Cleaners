//image slideshow

//array of images
const galleryImages = ['./img/process/process1.png', 
    './img/process/process2.png', 
    './img/process/process3.png', 
    './img/process/process4.png',  
    './img/process/process5.jpg',  
    './img/process/process6.png',  
    './img/process/process7.png'
   ];
//array of captions
const processCaptions = ['Make a call or send us a message', 
      'Provide your details', 
      'Drop off', 
      'Or home pick', 
      'Laundry work by us', 
      'Pick up', 
      'Or home delivery'
     ];

//counter for image being displayed
let currentImage = 0;

//function to move to the next image in array
//next button
function showNext(){

currentImage++;

// check to see if we are at the end of the array and reset to start
if (currentImage==galleryImages.length) {
currentImage=0;
}

//change the image source and caption
document.getElementById('processGallery').src = galleryImages[currentImage];
document.getElementById('captionProcess').innerHTML = processCaptions[currentImage];
}
//previous button
function showPrevious(){
//check if we are at the beginning of the array and set to end
if(currentImage==0){
currentImage=galleryImages.length;
}
currentImage--;
document.getElementById('processGallery').src = galleryImages[currentImage];
document.getElementById('captionProcess').innerHTML=processCaptions[currentImage];
}
//add an on-click event to the next arrow link to navigate to the next image
document.getElementById('nextImage').onclick=showNext;
document.getElementById('previousImage').onclick=showPrevious;

// event Listener for a keypress (up, down arrows and spacebar keys)
document.addEventListener('keydown', (event) => {
let key=event.key;
if (key=='ArrowRight' || key=='ArrowDown' || key==' '){
showNext();
} else if(key=='ArrowUp' || key=='ArrowLeft'){
showPrevious();
}
})


function isDesktop() {
    return window.innerWidth >= 1024; // 64em = 1024px
  }
  
  if (isDesktop()) {
    // attach event listeners and logic
    document.getElementById('nextImage').addEventListener('click', showNext);
    document.getElementById('previousImage').addEventListener('click', showPrevious);
  
    document.addEventListener('keydown', (event) => {
      const key = event.key;
      if (key === 'ArrowRight' || key === 'ArrowDown' || key === ' ') {
        showNext();
      } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
        showPrevious();
      }
    });
  }
let imageSlide = ["imagefolder/nature1.jpg", "imagefolder/02.jpg",   "imagefolder/53.jpg", "imagefolder/23.jpg",  "imagefolder/43.jpg",  "imagefolder/30.jpg",  "imagefolder/32.jpg", "imagefolder/24.jpg", "imagefolder/13.jpg",  "imagefolder/19.jpg", "imagefolder/20.jpg",  "imagefolder/14.jpg", "imagefolder/12.jpg", "imagefolder/09.jpg",  "imagefolder/10.jpg", "imagefolder/07.jpg", "imagefolder/04.jpg","imagefolder/fashion1.jpg", "imagefolder/03.jpg", "imagefolder/17.jpg",  "imagefolder/51.jpg",  "imagefolder/52.jpg",  "imagefolder/41.jpg",  "imagefolder/42.jpg",  "imagefolder/47.jpg", "imagefolder/38.jpg", "imagefolder/16.jpg", "imagefolder/06.jpg", "imagefolder/work1.jpg",  "imagefolder/15.jpg",  "imagefolder/39.jpg", "imagefolder/05.jpg",  "imagefolder/27.jpg", "imagefolder/28.jpg",  "imagefolder/29.jpg", "imagefolder/food1.jpg", "imagefolder/18.jpg", "imagefolder/08.jpg", "imagefolder/21.jpg",  "imagefolder/22.jpg",  "imagefolder/25.jpg",  "imagefolder/26.jpg",  "imagefolder/11.jpg",  "imagefolder/31.jpg",  "imagefolder/33.jpg", "imagefolder/34.jpg",  "imagefolder/40.jpg",  "imagefolder/35.jpg",  "imagefolder/36.jpg",  "imagefolder/37.jpg",  "imagefolder/49.jpg", "imagefolder/50.jpg"];
let Images = document.getElementById("image");
let dotSign = document.getElementsByClassName("dots_sign");
let Left = document.getElementById("left");
let Right = document.getElementById("right");
let counter = 0
Images.src = imageSlide[counter];

Right.addEventListener("click", nextImage);
function nextImage(){
    counter++;
    if(counter > imageSlide.length - 1 ){
        counter = 0;
    }

    for(let i = 0; i < dotSign.length; i++){
        dotSign[i].style.backgroundColor = "red";
    } 
    Images.src = imageSlide[counter];
    slideNo.innerHTML = `Slide ${counter + 1}`
   }



Left.addEventListener("click", prevImage);
function prevImage(){
    counter--;
    if(counter < 0){
        counter = imageSlide.length - 1;
    }
    for(let i = 0; i < dotSign.length; i++){
    } 
    Images.src = imageSlide[counter];
}


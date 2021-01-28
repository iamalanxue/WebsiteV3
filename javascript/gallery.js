const loadCards = (photos) => {
    let template = ``;
    for (photo of photos){
        template += `
        <div class="picture">
                <img src="${photo}">
            </div>
    `;
    }
    //console.log(template);
    document.querySelector('#gallery-container').innerHTML = template;
};

loadCards([
    'images/pic1.JPG',
    'images/pic2(resized).JPG',
    'images/pic3.JPG',
    'images/pic4.JPG',
    'images/pic5.JPG',
    'images/pic6.JPG',
    'images/pic7.JPG',
    'images/pic8.JPG',
    'images/pic9.JPG',
    'images/pic10.JPG',
    'images/pic11.jpeg',
    'images/pic12.jpeg',
    'images/pic13.jpeg',
    'images/pic14.jpeg',
    'images/pic15.jpeg',
]);

all_images_container = document.querySelectorAll(".picture");
// Adds a class to all the images in a gallery 
const addClass = function(tags){
    let counter = 1; 
    for (tag of tags){
        tag.classList.add("img-" + counter);
        counter +=1;
    }
}

addClass(all_images_container);

all_images = document.querySelectorAll(".picture img");
console.log(all_images);

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
modalImg.style.maxHeight = "800px";
modalImg.style.width="auto";
//give all images a modal onclick 
const MODAL = function(images){
    for(image of images){
        image.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    }
}
MODAL(all_images);
//This deals with closing the modal 
let span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
  }

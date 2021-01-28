const loadCards = (photos, column_num) => {
    let template = `<div class="column"></div>`;
    document.getElementById("gallery-container").innerHTML += template; 
    for (photo of photos){
        let img = document.createElement('img');
        img.src = photo;
        document.getElementsByClassName("column")[column_num].appendChild(img); 
    }
};

loadCards([
    'images/pic1.JPG',
    'images/pic2(resized).JPG',
], 0);

loadCards([
    'images/pic11.jpeg',
    'images/pic12.jpeg',
], 1)

loadCards([
    'images/pic6.JPG',
    'images/pic7.JPG',
], 2)


all_images = document.querySelectorAll(".column img");
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
let span = document.getElementsByClassName("close")[1];
span.onclick = function() { 
    modal.style.display = "none";
  }


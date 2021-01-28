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
    'images/pic5.JPG',
    'images/pic8.JPG',
], 0);

loadCards([
    'images/pic11.jpeg',
    'images/pic12.jpeg',
], 1)

loadCards([
    'images/pic6.JPG',
    'images/pic7.JPG',
], 2)


captions = ["An outdoor history Museum in China", "Buddhist Temple in Guangdong", "A backyard", "A salon during busy hours", "Beautiful Red Autumn Leaves", "Surroundings of a town"]

const con = function(src){

    if(src.includes('images/pic5.JPG')) return 0
    else if(src.includes('images/pic8.JPG')) return 3
    else if(src.includes('images/pic11.jpeg')) return 1
    else if(src.includes('images/pic12.jpeg')) return 4
    else if(src.includes('images/pic6.JPG')) return 2
    else if(src.includes('images/pic7.JPG')) return 5
}

const all_images = document.querySelectorAll(".column img");
const caption = document.getElementById("caption"); 
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
            let number = con(modalImg.src); 
            console.log(number); 
            caption.innerHTML = captions[number];
        }
    }
}
MODAL(all_images);
//This deals with closing the modal 
let span = document.getElementsByClassName("close")[1];
span.onclick = function() { 
    modal.style.display = "none";
  }


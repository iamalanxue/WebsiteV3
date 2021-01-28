// let browserWidth = window.innerWidth; 
// let image = document.querySelector(".landing-text img"); 
// image.style.width = browserWidth/5; 

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let camera_img = document.querySelector(".camera-container img"); 
let cam_modal = document.getElementById("cameraModal");
camera_img.style.cursor = "pointer";
camera_img.onclick = function(){
    cam_modal.style.display = "block"; 
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
} 


let span2 = document.getElementsByClassName("close")[0];
span2.onclick = function() { 
    cam_modal.style.display = "none";
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    //used this for refrence
    //https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
}


let p = document.querySelector("#about-me .container");
p.style.flexDirection = "row"; 
p.style.justifyContent = "space-around"
p.style.padding = "10px"


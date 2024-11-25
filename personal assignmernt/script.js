var slider_img = document.querySelector('.slider-img');
var images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
var i = 0; //curent image index


 function prev(){
    if(i <= 0) i =images.length;
    i--;
    return setImg();
 }
 function next(){
    if(i >= images.length - 1) i = -1;
    i++;
    return setImg();
 }

 function setImg(){
    return slider_img.setAttribute('src', 'images[i]');
 }

// Select the toggle button and the navigation list
//const toggleBtn = document.getElementById("toggleBtn");
//const navList = document.getElementById("navList");

// Add an event listener to the toggle button
//toggleBtn.addEventListener("click", () => {
    // Toggle the 'active' class to show or hide the navigation list
    //querySelector('navList').style.display="block";
//});

function clicknav(){
    return document.getElementById('navList').style.display="block";
}
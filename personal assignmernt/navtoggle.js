// Toggle navigation menu on hamburger click
document.getElementById('hamburger').addEventListener('click', function(){
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active').style.dispay='flex';
});
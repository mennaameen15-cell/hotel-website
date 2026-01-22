const text = "Welcome to Our Hotel";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); 
  }
}

window.onload = typeEffect;


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('nav ul'); 
menu.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.classList.remove('active');
    });
});
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



const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close");
const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Booking submitted successfully!");
  modal.style.display = "none";
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  document.getElementById("contactForm").reset();
});


const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

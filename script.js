// targeting the div with class hamburger.
// aswell as the nav > ul with the class nav-menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// listening for the click event to toggle the active
// classes in the css file
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// a forEach loop all elements with nav-link class then add
// event listener and remove active class on click
document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

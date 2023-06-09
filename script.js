let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('#manu ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header #manu ul li a[href*=' + id + ']').classList.add('active')
            });
        };
    });
};

// hamburger active

// let header = document.querySelector('header');
// document.querySelector('.hamburger').onclick = function() {
//     this.classList.toggle('active');
//     header.classList.toggle('active');
// }

// hamburger open


const toggle = document.getElementById('toggle');
const manu = document.getElementById('manu');
toggle.onclick = function() {
  toggle.classList.toggle('active');
  manu.classList.toggle('active');
}
manu.onclick = function() {
  manu.classList.toggle('active');
  toggle.classList.toggle('active');
}

document.onclick = function(e) {
  if (e.target.id !== 'manu' && e.target.id !== 'toggle') {
    manu.classList.remove('active');
    toggle.classList.remove('active');
  }
}

// const menu = document.querySelector('.hamburger');
// let menuOpen = false;
// menu.addEventListener('click', () => {
//     if(!menuOpen) {
//         menu.classList.add('open');
//         menuOpen = true;
//     } else {
//         menu.classList.remove('open');
//         menuOpen = false;
//     }
// });

// let nav = document.querySelector('header');
// document.querySelector('nav').onclick = function() {
//     this.classList.toggle('active');
//     header.classList.toggle('active');
// }

// const nav = document.querySelector('nav a');
// nav.addEventListener('click', () => {
//     if(!header) {
//         header.classList.add('active');
//     } else {
//         header.classList.remove('active');
//     }
// });

// text animation 

const texts = [
    "Web Developer",
    "Anime Lovers"
  ];
  
  const textElement = document.getElementById('text');
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
      textElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
  
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex++;
      if (textIndex === texts.length) {
        textIndex = 0;
      }
      setTimeout(type, 500);
    } else {
      setTimeout(type, 100);
    }
  }
  
  type();
// button


const button = document.querySelector('.button');
const submit = document.querySelector('.submit');

function toggleClass() {
  this.classList.toggle('active');
}

function addClass() {
  this.classList.add('finished');
}

button.addEventListener('click', toggleClass);
button.addEventListener('transitionend', toggleClass);
button.addEventListener('transitionend', addClass); 


// contact


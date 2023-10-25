let tech = document.querySelector('.lbut');
let prof = document.querySelector('.rbut');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

// Functions
function addr() {
  left.style.display = 'none';
  right.style.display = 'block';
};

function addl() {
  right.style.display = 'none';
  left.style.display = 'block';
};

// Events
prof.addEventListener('click', addr);
tech.addEventListener('click', addl);

// Get the button element
const button = document.querySelector('button');

// Add a mouseover event listener
button.addEventListener('mouseover', () => {
  // Change the button's background color
  button.style.backgroundColor = 'blue';
});

// Add a mouseout event listener
button.addEventListener('mouseout', () => {
  // Change the button's background color back to its original color
  button.style.backgroundColor = '';
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
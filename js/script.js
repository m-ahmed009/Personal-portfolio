function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7749, lng: -122.4194},
      zoom: 8
    });
  }

  
// text loop
var text = ["I'm Developer!", "I'm Desginer!", "I'm Programer!"];
var index = 0;
var currentText = "";
var letter = "";

function type() {
  if (index === text.length) {
    index = 0;
  }
  currentText = text[index];
  letter = currentText.slice(0, ++letterCount);

  document.getElementById("text").innerHTML = letter;
  if (letter.length === currentText.length) {
    index++;
    letterCount = 0;
  }
  setTimeout(type, 200);
}

var letterCount = 0;
type();

// text loop

// Aos Scroll Animation
AOS.init({
  duration: 2000,
  offset: 200,

});
// Aos Scroll Animation

// Navbar Hide on click
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
// Navbar Hide on click

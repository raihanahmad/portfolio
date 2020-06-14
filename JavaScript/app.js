// Create Mouse Cursor
const mouseCursor = document.createElement('div');
mouseCursor.className = "cursor";
document.body.appendChild(mouseCursor);


// Cursor Move With Mouse
window.addEventListener('mousemove', function (e) {
  mouseCursor.style.top = `${e.clientY}px`;
  mouseCursor.style.left = `${e.clientX}px`;
});

// Target UI Element
const showcaseTitle = document.querySelector('#name-title > div');
const blackWhiteToggler = document.querySelector('#arrow-svg');

showcaseTitle.addEventListener('mouseout', function (e) {
  mouseCursor.classList.remove('cursorGrowOnTitle');
});

showcaseTitle.addEventListener('mouseover', function (e) {
  mouseCursor.classList.add('cursorGrowOnTitle');
});

// Black And White Mode Controler
blackWhiteToggler.addEventListener('click', function (e) {

});
// Create Mouse Cursor
const mouseCursor = document.createElement('div');
mouseCursor.id = "cursor";
document.body.appendChild(mouseCursor);


// Cursor Move With Mouse
window.addEventListener('mousemove', function (e) {
  mouseCursor.style.top = `${e.clientY}px`;
  mouseCursor.style.left = `${e.clientX}px`;
});
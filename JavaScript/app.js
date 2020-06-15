// Target UI Element
const showcaseTitle = document.querySelector("#name-title > div");
const blackWhiteToggler = document.querySelector("#arrow-svg");
const navLi = document.querySelectorAll("#navbar-links > ul > li");

// Create Mouse Cursor
const mouseCursor = document.createElement("div");
mouseCursor.className = "cursor";
document.body.appendChild(mouseCursor);

// Cursor Move With Mouse
window.addEventListener("mousemove", function (e) {
  mouseCursor.style.top = `${e.clientY}px`;
  mouseCursor.style.left = `${e.clientX}px`;
});

// Landing Page Title Hover and  Cursor Big
showcaseTitle.addEventListener("mouseleave", function (e) {
  mouseCursor.classList.remove("cursorGrowOnTitle");
});

showcaseTitle.addEventListener("mouseover", function (e) {
  mouseCursor.classList.add("cursorGrowOnTitle");
});

// // Black And White Mode Controler
// blackWhiteToggler.addEventListener('click', function (e) {

// });

// Navbar Magnet Effect
(function () {
  const navbarMagnetEffect = function (e) {
    const navLink = this.querySelector("#navbar-links .nav-link");

    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 3) - move,
      yMove = (y / height) * (move * 3) - move;

    navLink.style.transform = `translate(${xMove}px, ${yMove}px)`;
    mouseCursor.classList.add("navHoverCursor");

    if (e.type === "mouseleave") {
      navLink.style.transform = "";
      mouseCursor.classList.remove("navHoverCursor");
    }
  };

  navLi.forEach((b) => {
    b.addEventListener("mousemove", navbarMagnetEffect);
    console.log(mouseCursor);
  });
  navLi.forEach((b) => {
    b.addEventListener("mouseleave", navbarMagnetEffect);
  });
})();

console.log(navbarMagnetEffect());

// Target UI Element
const showcaseTitle = document.querySelector("#name-title > div");
const blackWhiteToggler = document.querySelector("#arrow-svg");
const navLi = document.querySelectorAll("#navbar-links > ul > li");
const cursorNoneElements = document.querySelectorAll(".cursorNone");
const cursorTriangleElements = document.querySelectorAll(".cursorTriangle");
const cursorDefaultElements = document.querySelectorAll(".cursorDefault");

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
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    navLink.style.transform = `translate3d(${xMove}px, ${yMove}px, 0px)`;
    mouseCursor.classList.add("navHoverCursor");

    if (e.type === "mouseleave") {
      navLink.style.transform = "";
      mouseCursor.classList.remove("navHoverCursor");
    }
  };

  navLi.forEach((b) => {
    b.addEventListener("mousemove", navbarMagnetEffect);
  });
  navLi.forEach((b) => {
    b.addEventListener("mouseleave", navbarMagnetEffect);
  });
})();

// Cursor None On Hover
cursorNoneElements.forEach(function (cursorNoneElement) {
  cursorNoneElement.addEventListener("mouseover", function (e) {
    mouseCursor.classList.add("cursorScaleZero");
  });

  cursorNoneElement.addEventListener("mouseleave", function (e) {
    mouseCursor.classList.remove("cursorScaleZero");
  });
});

// Cursor Convart Triangle On Hover
cursorTriangleElements.forEach(function (cursorTriangleElement) {
  cursorTriangleElement.addEventListener("mouseleave", function (e) {
    mouseCursor.classList.remove("cursorToTriangle");
  });

  cursorTriangleElement.addEventListener("mouseover", function (e) {
    mouseCursor.classList.add("cursorToTriangle");
  });
});

// Cursor Default On Hover
cursorDefaultElements.forEach(function (cursorDefaultElement) {
  cursorDefaultElement.addEventListener("mouseleave", function (e) {
    mouseCursor.classList.remove("defaultCursor");
  });

  cursorDefaultElement.addEventListener("mouseover", function (e) {
    mouseCursor.classList.add("defaultCursor");
  });
});

// const test = document.body.scrollHeight - window.innerHeight;

// window.onscroll = function () {
//   let son = (window.pageYOffset / test) * 100;
//   console.log(son);
// }

window.addEventListener("scroll", (e) => {
  if (window.scroll) {
    mouseCursor.classList.remove("cursorScaleZero");
    mouseCursor.classList.remove("cursorToTriangle");
    mouseCursor.classList.remove("cursorGrowOnTitle");
    mouseCursor.classList.remove("navHoverCursor");
    mouseCursor.classList.remove("defaultCursor");
    contactBtn.classList.remove("contact-box");
  }
});

// Projects Section Distort Effect
const projectsSection = document.querySelector("#projects-section");
let currentPos = window.pageYOffset;

const distortEffect = function () {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * 0.1;

  projectsSection.style.transform = `skewY(${speed}deg)`;
  currentPos = newPos;
  requestAnimationFrame(distortEffect);
};

distortEffect();

// For Smoot Scroolling
const body = document.body,
  scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
  height = scrollWrap.getBoundingClientRect().height - 1,
  speed = 0.1;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
  offset += (window.pageYOffset - offset) * speed;

  var scroll = "translateY(-" + offset + "px) translateZ(0)";
  scrollWrap.style.transform = scroll;

  callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

// Show Contact Section
const contactBtn = document.querySelector("#contact-box");
const contactSection = document.querySelector("#contact-section");
const contactSectionWrap = document.querySelector("#contact-section-wrap");
const contactContentWrap = document.querySelector("#contact-content-wrap");
const closeContactBtn = document.querySelector("#close-contact");
const contactBtnClass = document.querySelector(".contact-box");

console.log(contactBtn);

contactBtnClass.addEventListener("click", () => {
  body.style.overflowY = "hidden";
  contactSection.style.display = "unset";
  contactSection.style.animation = "opacityIn 0.5s linear forwards";

  setTimeout(() => {
    contactSectionWrap.style.display = "unset";
    contactSectionWrap.style.animation = "opacityIn 1s linear forwards";
    contactContentWrap.style.animation =
      "opacity-translate-In .8s cubic-bezier(0.19, 0.25, 0.25, 0.95) forwards .3s";
  }, 700);
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    contactBtn.addEventListener("click", () => {
      contactSection.style.display = "none";
      body.style.overflowY = "unset";
      contactSectionWrap.style.display = "none";
    });
  } else {
    contactBtn.addEventListener("click", () => {
      body.style.overflowY = "hidden";
      contactSection.style.display = "unset";
      contactSection.style.animation = "opacityIn 0.5s linear forwards";

      setTimeout(() => {
        contactSectionWrap.style.display = "unset";
        contactSectionWrap.style.animation = "opacityIn 1s linear forwards";
        contactContentWrap.style.animation =
          "opacity-translate-In .8s cubic-bezier(0.19, 0.25, 0.25, 0.95) forwards .3s";
      }, 700);
    });
  }
});

closeContactBtn.addEventListener("click", () => {
  contactContentWrap.style.animation =
    "opacity-translate-Out 2s cubic-bezier(0.19, 0.25, 0.25, 0.95) forwards";

  contactSectionWrap.style.animation = "opacityOut .5s linear forwards";
  setTimeout(() => {
    contactSectionWrap.style.display = "none";
    contactSection.style.animation = "opacityOut 1s linear";
  }, 700);

  setTimeout(() => {
    contactSection.style.display = "none";
    body.style.overflowY = "unset";
  }, 1700);
});

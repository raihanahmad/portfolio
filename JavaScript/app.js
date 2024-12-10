// Target UI Element
const body = document.body;
const homeSection = document.querySelector("#home");
const projectSection = document.querySelector("#projects-section");
const cursorBigElements = document.querySelectorAll(".cursor-Big");
const blackWhiteToggler = document.querySelector("#arrow-svg");
const navLi = document.querySelectorAll("#navbar-links > ul > li");
const cursorNoneElements = document.querySelectorAll(".cursorNone");
const cursorTriangleElements = document.querySelectorAll(".cursorTriangle");
const cursorDefaultElements = document.querySelectorAll(".cursorDefault");
const projectViewButtonElements = document.querySelectorAll(
  ".project-view-button"
);

// Create Mouse Cursor
const mouseCursor = document.createElement("div");
mouseCursor.className = "cursor";
document.body.appendChild(mouseCursor);

// Cursor Move With Mouse
window.addEventListener("mousemove", function (e) {
  mouseCursor.style.top = `${e.clientY}px`;
  mouseCursor.style.left = `${e.clientX}px`;
});

// Title Hover and Cursor Big
cursorBigElements.forEach(function (cursorBigElement) {
  cursorBigElement.addEventListener("mouseleave", function (e) {
    mouseCursor.classList.remove("cursorGrowOnTitle");
  });

  cursorBigElement.addEventListener("mouseenter", function (e) {
    mouseCursor.classList.add("cursorGrowOnTitle");
  });
});

// // Black And White Mode Controler
// blackWhiteToggler.addEventListener('click', function (e) {

// });

// Navbar Magnet Effect
(function () {
  const navbarMagnetEffect = function (e) {
    const navLink = this.querySelector("#navbar-links .nav-link");

    const {
      offsetX: x,
      offsetY: y
    } = e, {
      offsetWidth: width,
      offsetHeight: height
    } = this,
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

// Cursor Hover On Project View Btn & Project Color return
projectViewButtonElements.forEach(function (projectViewButtonElement, index) {
  const projectShocaseElement = document.querySelector(
    `.project:nth-child(${index + 2})`
  ).children[0];

  projectViewButtonElement.addEventListener("mouseenter", function () {
    projectShocaseElement.classList.add("hover-project-showcase");
  });

  projectViewButtonElement.addEventListener("mouseleave", function () {
    projectShocaseElement.classList.remove("hover-project-showcase");
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

window.addEventListener("scroll", (e) => {
  if (window.scroll) {
    mouseCursor.classList.remove("cursorScaleZero");
    mouseCursor.classList.remove("cursorToTriangle");
    mouseCursor.classList.remove("cursorGrowOnTitle");
    mouseCursor.classList.remove("navHoverCursor");
    mouseCursor.classList.remove("defaultCursor");
  }
});

// // Projects Section Distort Effect
// const projectsSection = document.querySelector("#projects-section");
// let currentPos = window.pageYOffset;

// const distortEffect = function () {
//   const newPos = window.pageYOffset;
//   const diff = newPos - currentPos;
//   const speed = diff * 0.1;

//   projectsSection.style.transform = `skewY(${speed}deg)`;
//   currentPos = newPos;
//   requestAnimationFrame(distortEffect);
// };

// distortEffect();

// For Smoot Scroolling
const scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
  height = scrollWrap.getBoundingClientRect().height - 1,
  speed = 0.15;

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

contactBtn.addEventListener("click", () => {
  body.style.overflowY = "hidden";
  contactSection.style.display = "unset";
  contactSection.style.top = `${window.pageYOffset}px`;
  contactSection.style.animation = "opacityIn 0.5s linear forwards";

  setTimeout(() => {
    contactSectionWrap.style.display = "unset";
    contactSectionWrap.style.animation = "opacityIn 1s linear forwards";
    contactContentWrap.style.animation =
      "opacity-translate-In .8s cubic-bezier(0.19, 0.25, 0.25, 0.95) forwards .3s";
  }, 700);
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

// Home section scrolling animation
window.addEventListener("scroll", function () {
  let currScrollPos = window.pageYOffset;
  homeSection.style.opacity = -currScrollPos / 200 + 1.7;
  homeSection.style.transform = `translate3d(0, ${
    -currScrollPos / 5
  }px, 0) skew(0deg, ${currScrollPos / 60}deg)`;
});

// Scrolling and show animations
function isVisible(element, distanceFromTopShow) {
  let elementBox = element.getBoundingClientRect();
  // let distanceFromTopShow = -310;
  let distanceFromTopHidden = 10;
  let mainDistance = elementBox.top - window.innerHeight;

  if (mainDistance < distanceFromTopShow) {
    return true;
  }
  if (mainDistance > distanceFromTopHidden) {
    return false;
  }
}

// Project section title
function projectTitleAnimation() {
  let sectionList = document.querySelectorAll(".popo");
  let section = document.querySelector("#projects-section-title");
  sectionList.forEach(function (sectionL) {
    if (isVisible(section, -310) === true) {
      sectionL.classList.remove("hidden");
    }
    if (isVisible(section) === false) {
      sectionL.classList.add("hidden");
    }
  });
}

// About Section
const aboutTitle = document.querySelector("#about-title");
const aboutMeParagraphs = document.querySelectorAll("#about-me-div > p");
const readMoreDiv = document.querySelector('.read-more');

document.querySelectorAll(".about-p-one span").forEach(function (spanText, index) {
  spanText.style.animation = `paragraphType 0.001s ease ${index * 100 + 500}ms forwards`;
});

document.querySelectorAll(".about-p-two span").forEach(function (spanText, index) {
  spanText.style.animation = `paragraphType 0.001s ease ${index * 100 + 5500}ms forwards`;
});

document.querySelectorAll(".about-p-three span").forEach(function (spanText, index) {
  spanText.style.animation = `paragraphType 0.001s ease ${index * 100 + 8200}ms forwards`;
});

document.querySelectorAll(".read-more .read-more-item").forEach(function (item, index) {
  item.style.animation = `paragraphType 0.001s ease ${index * 300 + 13500}ms forwards`;
});

function aboutMeSection() {
  if (isVisible(aboutTitle, -220) === true) {
    aboutTitle.style.animation = `poppop 1s ease forwards`;
    readMoreDiv.style.display = 'block';
    aboutMeParagraphs.forEach(function (aboutMeParagraph) {
      aboutMeParagraph.style.display = 'block';
    });
  }
  if (isVisible(aboutTitle) === false) {
    aboutTitle.style.animation = `unset`;
    readMoreDiv.style.display = 'none';
    aboutMeParagraphs.forEach(function (aboutMeParagraph) {
      aboutMeParagraph.style.display = 'none';
    });
  }
}

// Footer section
const footerContainer = document.querySelector('#footer-container');

function footerSectionShowing() {
  let elementBox = body.getBoundingClientRect();
  if ((elementBox.bottom - window.innerHeight + window.pageYOffset - 10) < window.pageYOffset) {
    footerContainer.style.display = `flex`;
    console.log('yep');
  }
  if ((elementBox.bottom - window.innerHeight + window.pageYOffset - 200) > window.pageYOffset) {
    footerContainer.style.display = `none`;
  }
}

document.addEventListener("scroll", footerSectionShowing);
document.addEventListener("scroll", aboutMeSection);
document.addEventListener("scroll", projectTitleAnimation);

// Project section scrolling animation
window.addEventListener("scroll", function () {
  let elementBox = projectSection.getBoundingClientRect();
  let mainDistance = elementBox.bottom - window.innerHeight;
  // console.log(mainDistance / 400 + 1.3);
  projectSection.style.opacity = mainDistance / 400 + 1.2;
  if (-mainDistance / 4 >= 0) {
    projectSection.style.transform = `translate3d(0, ${mainDistance / 4}px, 0)`;
  } else {
    projectSection.style.transform = `translate3d(0, 0px, 0)`;
  }
});

// Full Website Loading
const loader = document.querySelector('#website-loading');
const fullPage = document.querySelector('.smooth-scroll-wrapper');

window.addEventListener('load', function () {
  loader.style.animation = 'opacityDisplayNone 0.5s ease forwards 1';
  fullPage.style.visibility = 'visible';
  body.style.overflowY = "unset"
});

// Smooth Scrolling
$(".nav-link-home").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
        scrollTop: $(hash).offset().top - 0,
      },
      1000
    );
  }
});

$(".nav-link-projects-section").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
        scrollTop: $(hash).offset().top - 0,
      },
      1000
    );
  }
});

$(".nav-link-about").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
        scrollTop: $(hash).offset().top - 0,
      },
      4500
    );
  }
});


// Smallar Touch Devices Media Queries
if (window.matchMedia("(max-width: 1100px)").matches) {
  mouseCursor.remove();
}
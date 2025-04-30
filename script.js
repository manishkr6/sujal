const hamBurger = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  const icon = hamburger.querySelector("i");

  hamburger.addEventListener("click", (event) => {
    nav.classList.toggle("active");

    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      icon.style.transform = "rotate(180deg)";
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      icon.style.transform = "rotate(0deg)";
    }
    event.stopPropagation(); // Prevents the event from bubbling up to document
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
      nav.classList.remove("active");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      icon.style.transform = "rotate(0deg)";
    }
  });
};

document.addEventListener("DOMContentLoaded", hamBurger);

const skillsSection = () => {
  const skills = [
    {
      name: "html",
      imgSrc: "img/Skills-img/html.png",
    },
    {
      name: "css",
      imgSrc: "img/Skills-img/css.png",
    },
    {
      name: "JavaScript",
      imgSrc: "img/Skills-img/js.png",
    },
    {
      name: "React.js",
      imgSrc: "img/Skills-img/reactjs.png",
    },
    {
      name: "Node.js",
      imgSrc: "img/Skills-img/nodejs.png",
    },
    {
      name: "mongoDB",
      imgSrc: "img/Skills-img/mongodb.png",
    },
    {
      name: "MySql",
      imgSrc: "img/Skills-img/sql.png",
    },
    {
      name: "git",
      imgSrc: "img/Skills-img/git.png",
    },
    {
      name: "github",
      imgSrc: "img/Skills-img/github.png",
    },
    {
      name: "java",
      imgSrc: "img/Skills-img/java.png",
    },
    {
      name: "c-sharp",
      imgSrc: "img/Skills-img/c-sharp.png",
    },
  ];
  const skillsGrid = document.querySelector(".skills-grid");

  skills.forEach((skill) => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skills-card");
    skillCard.innerHTML = `
      <div class="image"><img src="${skill.imgSrc}" alt="${skill.name}" /></div>
      `;

    skillsGrid.appendChild(skillCard);
  });
};

document.addEventListener("DOMContentLoaded", skillsSection);

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;

function updateSlider() {
  const slideWidth = slides[0].offsetWidth + 20;
  const offset = (slider.offsetWidth - slideWidth) / 2;
  slider.style.transform = `translateX(${
    -currentIndex * slideWidth + offset
  }px)`;

  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    slide.style.opacity = "0.6";
    slide.style.transform = "scale(0.8)";
  });

  slides[currentIndex].classList.add("active");
  slides[currentIndex].style.opacity = "1";
  slides[currentIndex].style.transform = "scale(1)";
}

function moveSlider(index) {
  currentIndex = (index + slides.length) % slides.length;
  updateSlider();
}

nextBtn.addEventListener("click", () => moveSlider(currentIndex + 1));
prevBtn.addEventListener("click", () => moveSlider(currentIndex - 1));

let isScrolling = false;
slider.addEventListener("wheel", (event) => {
  if (isScrolling) return;
  isScrolling = true;

  if (event.deltaY > 0 || event.deltaX > 0) {
    moveSlider(currentIndex + 1);
  } else {
    moveSlider(currentIndex - 1);
  }

  setTimeout(() => (isScrolling = false), 500);
});

slides.forEach((slide, index) => {
  slide.addEventListener("click", () => moveSlider(index));
});

updateSlider();

// -------------------------------form------------------------------

// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   form.reset();
// });

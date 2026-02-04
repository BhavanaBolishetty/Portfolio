/* ================= TYPING EFFECT ================= */
const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing-text");
  if (!typingElement) return;

  const fullText = roles[roleIndex];
  typingElement.textContent = isDeleting
    ? fullText.slice(0, --charIndex)
    : fullText.slice(0, ++charIndex);

  let speed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === fullText.length) {
    speed = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

/* ================= SCROLL REVEAL ================= */
const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleReveal);
handleReveal();

/* ================= ACTIVE NAV LINK ================= */
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-item");

function updateActiveNav() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${currentSection}`) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);

/* ====================RESPONSIVE NAVBAR================*/
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});


/* ================= THEME TOGGLE ================= */
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// DEFAULT = DARK MODE
body.classList.add("dark");
toggleBtn.textContent = "🔆";

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "🔆";
  } else {
    toggleBtn.textContent = "🌙";
  }
});


/* ================= CONTACT FORM ================= */
document.addEventListener("DOMContentLoaded", () => {
  if (window.emailjs) {
    emailjs.init("slPiWUe7bE4wtXN_J");
  }
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_sqhsjxt",
      "template_o9gdf5k",
      this
    )
    .then(() => {
      alert("Message sent successfully!");
      contactForm.reset();
    })
    .catch((error) => {
      alert("Failed to send message. Try again later.");
      console.error(error);
    });
});


/* ================= PAGE RELOAD BEHAVIOR ================= */
window.addEventListener("load", () => {
  if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});



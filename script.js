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
const navLinks = document.querySelectorAll(".nav-item[href^='#']");

function updateActiveNav() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

/* ================= THEME TOGGLE ================= */
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

body.classList.add("dark");
themeToggle.textContent = "🔆";

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "🔆" : "🌙";
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
const navEntries = performance.getEntriesByType("navigation");
if (navEntries.length && navEntries[0].type === "reload") {
  window.location.replace("#home");
}



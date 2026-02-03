/* ================= TYPING EFFECT ================= */
const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing-text");

function typingEffect() {
  if (!typingText) return;

  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingText.textContent = currentRole.slice(0, ++charIndex);
    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(() => {}, 1000);
    }
  } else {
    typingText.textContent = currentRole.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typingEffect, deleting ? 60 : 120);
}

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
themeToggle.textContent = "☀️";

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

/* ================= CONTACT FORM ================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}

/* ================= PAGE RELOAD BEHAVIOR ================= */
const navEntries = performance.getEntriesByType("navigation");
if (navEntries.length && navEntries[0].type === "reload") {
  window.location.replace("#home");
}

/* ================= INIT ================= */
typingEffect();


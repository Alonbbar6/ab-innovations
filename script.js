const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const contactForm = document.querySelector(".contact-form");

const savedTheme = localStorage.getItem("ab-theme");
if (savedTheme === "light") {
  body.classList.remove("dark");
  themeToggle.textContent = "Dark";
} else {
  body.classList.add("dark");
  themeToggle.textContent = "Light";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("ab-theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "Light" : "Dark";
});

menuToggle.addEventListener("click", () => {
  siteNav.classList.toggle("open");
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => siteNav.classList.remove("open"));
});

document.querySelectorAll(".view-toggle").forEach((group) => {
  const card = group.closest(".project-card");
  group.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.view;
      group.querySelectorAll(".toggle-btn").forEach((b) => b.classList.toggle("active", b === btn));
      card.querySelectorAll(".toggle-img").forEach((img) => img.classList.toggle("active", img.dataset.view === view));
    });
  });
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const status = contactForm.querySelector(".form-status");
  const button = contactForm.querySelector("button[type=submit]");
  button.disabled = true;
  status.textContent = "Sending...";
  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error(`Formspree returned ${response.status}`);
    status.textContent = "Thanks! Your message was sent. I reply within 24 hours.";
    contactForm.reset();
  } catch (error) {
    status.textContent = "Something went wrong. Please email alonsobardales.apps@gmail.com or call (786) 340-1443.";
  } finally {
    button.disabled = false;
  }
});

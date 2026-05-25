const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const productSearch = document.querySelector("#productSearch");
const productCategory = document.querySelector("#productCategory");
const products = Array.from(document.querySelectorAll(".product"));
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

function filterProducts() {
  const query = productSearch.value.trim().toLowerCase();
  const category = productCategory.value;

  products.forEach((product) => {
    const matchesCategory = category === "All" || product.dataset.category === category;
    const matchesSearch = product.dataset.search.includes(query) || product.textContent.toLowerCase().includes(query);
    product.hidden = !matchesCategory || !matchesSearch;
  });
}

productSearch.addEventListener("input", filterProducts);
productCategory.addEventListener("change", filterProducts);

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactForm.querySelector(".form-status").textContent =
    "Inquiry captured locally. Connect this form to Netlify Forms, Formspree, or a CRM webhook when ready.";
  contactForm.reset();
});

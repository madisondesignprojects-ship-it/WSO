const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("primaryNav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
const path = window.location.pathname.replace(/\/+$/, "") || "/";
document.querySelectorAll(".primary-nav a").forEach((link) => {
  const target = new URL(link.href, window.location.origin).pathname.replace(/\/+$/, "") || "/";
  if (target === path) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

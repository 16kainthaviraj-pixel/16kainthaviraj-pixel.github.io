const toggleBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "◐";
} else {
  toggleBtn.textContent = "◑";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "◐";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "◑";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("overlay");
  const links = document.querySelectorAll(".nav-links a");

  function toggleMenu() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("show");
    overlay.classList.toggle("show");
  }

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  links.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("show");
      overlay.classList.remove("show");
    });
  });
});
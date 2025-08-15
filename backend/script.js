window.addEventListener("DOMContentLoaded", () => {
  // ---- Navigation Active Link Highlight ----
  const navLinks = document.querySelectorAll(".nav-bar .nav-link");
  let currentPath = window.location.pathname.replace(/\/$/, "");
  currentPath =
    currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";

  navLinks.forEach((link) => {
    let href = link.getAttribute("href").replace(/\/$/, "");
    href = href.substring(href.lastIndexOf("/") + 1) || "index.html";

    link.classList.toggle("active", href === currentPath);
  });

  // ---- Navbar Responsive Toggle & Info Popup ----
  const logoBtn = document.getElementById("logo-btn");
  const titles = document.querySelector(".nav-bar .titles");
  const infoToggleBtn = document.querySelector(".info-toggle-btn");
  const infoPopup = document.getElementById("info-popup");
  const closePopupBtn = document.getElementById("close-popup");

  logoBtn?.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      titles?.classList.toggle("open");
    }
  });

  infoToggleBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    infoPopup?.classList.remove("hidden");
  });

  closePopupBtn?.addEventListener("click", () => {
    infoPopup?.classList.add("hidden");
  });

  infoPopup?.addEventListener("click", (e) => {
    if (e.target === infoPopup) {
      infoPopup.classList.add("hidden");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      titles?.classList.remove("open");
      infoPopup?.classList.add("hidden");
    }
  });

  // ---- Background Image Slideshow for .home ----
  const images_dark = [
    "frontend/assets/bg1_dark.png",
    "frontend/assets/bg12_dark.png",
  ];
  let images = images_dark;
  let index = 0;
  const home = document.querySelector(".home");

  // Preload images
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  // Set initial background image if .home element exists
  if (home) {
    home.style.backgroundImage = `url('${images[0]}')`;
  }

  // Change background image every 3 seconds
  setInterval(() => {
    index = (index + 1) % images.length;
    if (home) {
      home.style.backgroundImage = `url('${images[index]}')`;
    }
  }, 3000);
});

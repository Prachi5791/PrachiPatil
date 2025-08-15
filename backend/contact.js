window.addEventListener("DOMContentLoaded", () => {
  // --- Navigation Active Link Highlight ---
  const navLinks = document.querySelectorAll(".nav-bar .nav-link");
  let currentPath = window.location.pathname.replace(/\/$/, "");
  currentPath =
    currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";

  navLinks.forEach((link) => {
    let href = link.getAttribute("href").replace(/\/$/, "");
    href = href.substring(href.lastIndexOf("/") + 1) || "index.html";

    link.classList.toggle("active", href === currentPath);
  });

  // --- Navbar Responsive Toggle & Info Popup ---
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
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(this);
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          document.getElementById("sent-popup").classList.remove("hidden");
          this.reset();
        } else {
          alert("Submission failed, try again later.");
        }
      });
  });

document
  .getElementById("close-popup-btn")
  ?.addEventListener("click", function () {
    document.getElementById("sent-popup").classList.add("hidden");
  });

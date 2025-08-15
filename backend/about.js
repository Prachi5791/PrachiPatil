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

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // ---- Navbar Responsive Toggle and Info Popup ----
  const logoBtn = document.getElementById("logo-btn");
  const titles = document.querySelector(".nav-bar .titles");
  const infoToggleBtn = document.querySelector(".info-toggle-btn");
  const infoPopup = document.getElementById("info-popup");
  const closePopupBtn = document.getElementById("close-popup");

  if (logoBtn && titles) {
    logoBtn.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        titles.classList.toggle("open");
      }
    });
  }

  if (infoToggleBtn && infoPopup) {
    infoToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      infoPopup.classList.remove("hidden");
    });
  }

  if (closePopupBtn && infoPopup) {
    closePopupBtn.addEventListener("click", () => {
      infoPopup.classList.add("hidden");
    });
  }

  if (infoPopup) {
    infoPopup.addEventListener("click", (e) => {
      if (e.target === infoPopup) {
        infoPopup.classList.add("hidden");
      }
    });
  }

  // Cleanup classes when resizing
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      titles?.classList.remove("open");
      infoPopup?.classList.add("hidden");
    }
  });

  // ---- Download Buttons ----
  const downloadResumeBtn = document.getElementById("download-resume");
  const downloadCvBtn = document.getElementById("download-cv");

  const downloadFile = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  downloadResumeBtn?.addEventListener("click", () => {
    downloadFile("/frontend/assets/Prachi_Patil_Resume.pdf");
  });

  downloadCvBtn?.addEventListener("click", () => {
    downloadFile("assets/Prachi_Maruti_Patil_CV.pdf");
  });

  // ---- Portfolio Modal Handling ----
  const portfolioBtn = document.getElementById("view-portfolio-btn");
  const portfolioModal = document.getElementById("portfolio-modal");
  const modalCloseBtn = document.getElementById("modal-close");

  portfolioBtn?.addEventListener("click", () => {
    portfolioModal?.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });

  modalCloseBtn?.addEventListener("click", () => {
    portfolioModal?.classList.add("hidden");
    document.body.style.overflow = "";
  });

  portfolioModal?.addEventListener("click", (e) => {
    if (e.target === portfolioModal) {
      portfolioModal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });
});

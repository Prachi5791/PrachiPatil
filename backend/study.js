window.addEventListener("DOMContentLoaded", () => {
  // Highlight Active Nav Link
  const navLinks = document.querySelectorAll(".nav-bar .nav-link");
  let currentPath = window.location.pathname.replace(/\/$/, "");
  currentPath =
    currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";

  navLinks.forEach((link) => {
    let href = link.getAttribute("href").replace(/\/$/, "");
    href = href.substring(href.lastIndexOf("/") + 1) || "index.html";

    link.classList.toggle("active", href === currentPath);
  });

  // Navbar and Popup Elements
  const logoBtn = document.getElementById("logo-btn");
  const titles = document.querySelector(".nav-bar .titles");
  const infoToggleBtn = document.querySelector(".info-toggle-btn");
  const infoPopup = document.getElementById("info-popup");
  const closePopupBtn = document.getElementById("close-popup");

  // Responsive Navbar Toggle
  logoBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      titles.classList.toggle("open");
    }
  });

  // Info Popup Controls
  infoToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    infoPopup.classList.remove("hidden");
  });

  closePopupBtn.addEventListener("click", () => {
    infoPopup.classList.add("hidden");
  });

  infoPopup.addEventListener("click", (e) => {
    if (e.target === infoPopup) {
      infoPopup.classList.add("hidden");
    }
  });

  // Responsive Cleanup on Resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      titles.classList.remove("open");
      infoPopup.classList.add("hidden");
    }
  });

  // --- Floating Bubble Animation ---

  class FloatingBubble {
    constructor(element, containerRadius, centerX, centerY) {
      this.element = element;
      this.containerRadius = containerRadius;
      this.centerX = centerX;
      this.centerY = centerY;
      this.width = parseInt(getComputedStyle(element).width);
      this.height = parseInt(getComputedStyle(element).height);
      this.radius = this.width / 2;

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * (containerRadius - this.radius - 20);
      this.x = centerX + Math.cos(angle) * distance;
      this.y = centerY + Math.sin(angle) * distance;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.mass = this.radius;
      this.damping = 0.99;

      this.updatePosition();
    }

    updatePosition() {
      this.element.style.left = this.x - this.radius + "px";
      this.element.style.top = this.y - this.radius + "px";
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      const dx = this.x - this.centerX;
      const dy = this.y - this.centerY;
      const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);

      if (distanceFromCenter + this.radius > this.containerRadius) {
        const angle = Math.atan2(dy, dx);
        const maxDistance = this.containerRadius - this.radius;
        this.x = this.centerX + Math.cos(angle) * maxDistance;
        this.y = this.centerY + Math.sin(angle) * maxDistance;

        const normalX = Math.cos(angle);
        const normalY = Math.sin(angle);
        const dotProduct = this.vx * normalX + this.vy * normalY;
        this.vx -= 2 * dotProduct * normalX;
        this.vy -= 2 * dotProduct * normalY;
        this.vx *= 0.8;
        this.vy *= 0.8;
      }

      this.vx *= this.damping;
      this.vy *= this.damping;
      this.vx += (Math.random() - 0.5) * 0.1;
      this.vy += (Math.random() - 0.5) * 0.1;

      const maxVelocity = 3;
      this.vx = Math.max(-maxVelocity, Math.min(maxVelocity, this.vx));
      this.vy = Math.max(-maxVelocity, Math.min(maxVelocity, this.vy));

      this.updatePosition();
    }

    checkCollision(other) {
      const dx = other.x - this.x;
      const dy = other.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = this.radius + other.radius;

      if (distance < minDistance) {
        const angle = Math.atan2(dy, dx);
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);

        const vx1r = this.vx * cos + this.vy * sin;
        const vy1r = this.vy * cos - this.vx * sin;
        const vx2r = other.vx * cos + other.vy * sin;
        const vy2r = other.vy * cos - other.vx * sin;

        const vx1f =
          ((this.mass - other.mass) * vx1r + 2 * other.mass * vx2r) /
          (this.mass + other.mass);
        const vx2f =
          ((other.mass - this.mass) * vx2r + 2 * this.mass * vx1r) /
          (this.mass + other.mass);

        this.vx = vx1f * cos - vy1r * sin;
        this.vy = vy1r * cos + vx1f * sin;
        other.vx = vx2f * cos - vy2r * sin;
        other.vy = vy2r * cos + vx2f * sin;

        const overlap = minDistance - distance;
        const separationX = (dx / distance) * overlap * 0.5;
        const separationY = (dy / distance) * overlap * 0.5;
        this.x -= separationX;
        this.y -= separationY;
        other.x += separationX;
        other.y += separationY;
      }
    }
  }

  const bubbles = document.querySelectorAll(".bubble");
  const skillsContainer = document.querySelector(".skills-container");
  if (!skillsContainer || bubbles.length === 0) return;
  const containerRect = skillsContainer.getBoundingClientRect();
  const containerRadius =
    Math.min(containerRect.width, containerRect.height) / 2 - 10;
  const centerX = containerRect.width / 2;
  const centerY = containerRect.height / 2;

  const floatingBubbles = [];
  bubbles.forEach((bubble) => {
    floatingBubbles.push(
      new FloatingBubble(bubble, containerRadius, centerX, centerY)
    );
  });

  function animate() {
    floatingBubbles.forEach((bubble) => bubble.update());
    for (let i = 0; i < floatingBubbles.length; i++) {
      for (let j = i + 1; j < floatingBubbles.length; j++) {
        floatingBubbles[i].checkCollision(floatingBubbles[j]);
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
});

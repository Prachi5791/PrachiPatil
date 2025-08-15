window.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-bar .nav-link");
  let currentPath = window.location.pathname.replace(/\/$/, "");
  currentPath =
    currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";

  navLinks.forEach((link) => {
    let href = link.getAttribute("href").replace(/\/$/, "");
    href = href.substring(href.lastIndexOf("/") + 1) || "index.html";

    link.classList.toggle("active", href === currentPath);
  });
});

// =======================
// Responsive Navbar & Info Popup
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const logoBtn = document.getElementById("logo-btn");
  const titles = document.querySelector(".nav-bar .titles");
  const infoToggleBtn = document.querySelector(".info-toggle-btn");
  const infoPopup = document.getElementById("info-popup");
  const closePopupBtn = document.getElementById("close-popup");

  logoBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      titles.classList.toggle("open");
    }
  });

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

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      titles.classList.remove("open");
      infoPopup.classList.add("hidden");
    }
  });
});

// =======================
// Projects Data
// =======================
const projectsData = {
  Basic: [
    {
      tag: "00",
      title: "FlipFrame – Orthographic & Perspective Viewer",
      tech: ["Next.js", "HTML", "JavaScript", "CSS3"],
      link: "https://flipframe.vercel.app/",
      codeLink: "https://github.com/Prachi5791/Projections",
      video: "../assets/flipframe.mp4",
      features: [
        "Showcases and explains orthographic plans and perspectives",
        "Supports both 2D and 3D viewing modes",
        "Interactive UI for exploring and switching between views",
        "Optimized for smooth performance and responsiveness",
      ],
      description:
        "A Next.js-based frontend web application designed to help users visualize and understand architectural orthographic plans alongside perspective views in both 2D and 3D. Built for clarity, interactivity, and scalability, FlipFrame is ideal for educational and professional demonstrations of spatial design concepts.",
    },

    {
      tag: "01",
      title: "Cash Calculator",
      link: "https://prachi5791.github.io/Cash-Counter/",
      codeLink: "https://github.com/Prachi5791/Cash-Counter",
      video: "../assets/cash_cal.mp4",
      tech: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Supports all common ₹ denominations",
        "Instant total in numbers & words",
        "Responsive and attractive UI",
        "Reset option to clear fields",
      ],
      description:
        "A modern and interactive web tool to quickly calculate total cash by entering the number of each Indian currency denomination. Displays results in numbers and words with a clean, responsive UI.",
    },
    {
      tag: "02",
      title: "English Dictionary Web App",
      link: "https://prachi5791.github.io/Dictionary/",
      codeLink: "https://github.com/Prachi5791/Dictionary",
      video: "../assets/dictionary.mp4",
      tech: ["HTML5", "CSS3", "JavaScript", "Dictionary API"],
      features: [
        "Fetches live word definitions",
        "Displays part of speech and meaning",
        "Audio pronunciation using speech synthesis",
        "Search via button or Enter key",
      ],
      description:
        "An online dictionary app that fetches and displays word meanings, parts of speech, and pronunciation using a free dictionary API. Includes speech synthesis for audio output.",
    },
    {
      tag: "03",
      title: "Poll System",
      link: "https://prachi5791.github.io/Basic_Polling_Site/",
      codeLink: "https://github.com/Prachi5791/Basic_Polling_Site",
      video: "../assets/polling.mp4",
      tech: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Single-choice voting",
        "Instant result display",
        "Clean responsive layout",
        "Easy customization",
      ],
      description:
        "A simple single-question polling application where users can vote for their favorite option and see the results instantly.",
    },
    {
      tag: "04",
      title: "Note Taking Application",
      link: "https://prachi5791.github.io/Sticky-Note-Application/",
      codeLink: "https://github.com/Prachi5791/Sticky-Note-Application",
      video: "../assets/sticky.mp4",
      tech: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
      features: [
        "Add, edit, and delete notes",
        "Inline editing in textarea",
        "Modern and clean UI",
        "Offline functionality with localStorage",
      ],
      description:
        "A lightweight browser-based note-taking app allowing users to add, edit, save, and delete notes with a simple card-style interface.",
    },
  ],
  Frontend: [
    {
      tag: "00",
      title: "Portfolio Website",
      link: "https://prachi5791.github.io/Ar.Vaishnavi_Patil/",
      video: "../assets/portfolio.mp4",
      codeLink: "https://github.com/Prachi5791/Ar.Vaishnavi_Patil",
      tech: ["HTML5", "CSS3", "JavaScript", "Swiper.js"],
      features: [
        "Media-rich gallery for project images and videos",
        "Downloadable CV and portfolio PDFs",
        "Animated, interactive project highlights",
        "Responsive design for all devices",
        "Well-organized code and file structure",
      ],
      description:
        "A visually engaging portfolio website created for an architect, featuring professional project galleries, downloadable credentials, and a modern responsive design. Built for easy updates and future-proof client use, with a structure optimized for both user experience and maintainability.",
    },
    {
      tag: "01",
      title: "Login & Registration Form",
      link: "https://prachi5791.github.io/Registration_Form/",
      codeLink: "https://github.com/Prachi5791/Registration_Form",
      video: "../assets/login_signUp.mp4",
      tech: ["HTML5", "CSS3", "JavaScript", "Iconscout Unicons"],
      features: [
        "Combined login & signup forms",
        "Password visibility toggle",
        "Responsive and mobile-friendly",
        "Smooth transitions and animations",
      ],
      description:
        "A dual-purpose authentication UI containing both login and signup forms in a single page, with animated transitions and a clean responsive design.",
    },
  ],
  AIML: [
    {
      tag: "00",
      title: "UPI Transaction Data Visualization",
      tech: [
        "Python",
        "Jupyter Notebook",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Plotly",
      ],
      codeLink: "https://github.com/Prachi5791/UPI_Data_Visualization",
      features: [
        "Treemaps showing merchant category-wise transaction amounts",
        "Bar plots analyzing transaction types by age group, fraud counts by device type, and success vs failure by network/bank",
        "Heatmaps visualizing hourly trends by day of week and merchant category activity over hours",
        "Pie chart displaying transaction type proportions",
      ],
      description:
        "This project is a comprehensive Jupyter Notebook that explores and visualizes UPI (Unified Payments Interface) transaction data. It uncovers insights related to transaction types, user behavior segmented by age group and device type, merchant categories, transaction success or failure, fraud patterns, and hourly and weekly trends. The visualizations help in understanding transaction distribution, fraud detection, and network performance.",
    },
    {
      tag: "01",
      title: "Gemini AI Clone",
      tech: ["HTML5", "CSS3", "JavaScript", "Gemini API"],
      codeLink: "https://github.com/Prachi5791/clne-gemini-site",
      features: [
        "Real-time AI responses",
        "Chat UI experience",
        "Error handling for API requests",
        "Conversation reset function",
      ],
      description:
        "A conversational web app clone of Google's Gemini, integrated with the Gemini API to deliver AI-powered responses in real-time.",
    },
  ],
  FullStack: [
    {
      tag: "00",
      title: "Vocabulary Learning App",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "REST API"],
      codeLink: "https://github.com/Prachi5791/Vocabify",
      features: [
        "Multilingual support for vocabulary-building across multiple languages",
        "Interactive exercises, quizzes, and flashcards to reinforce learning",
        "Personalized word lists and progress tracking for each user",
        "User authentication and individualized profiles",
      ],
      description:
        "A Vocabulary Learning App designed to make language acquisition seamless and engaging through a multilingual learning approach, offering tools to build and enhance vocabulary across various languages. The full stack implementation allows dynamic content, secure authentication, and personalized progression, making it an ideal platform for learners at any level.",
    },
    {
      tag: "01",
      title: "Real-Time Chat Application",
      tech: ["React.js", "Node.js", "Express", "Socket.io"],
      codeLink: "https://github.com/Prachi5791/Chat_App",
      features: [
        "Real-time messaging between users",
        "Send and receive text messages instantly",
        "Persistent chat history in browser session",
        "User-friendly responsive chat interface",
      ],
      description:
        "A simple yet effective real-time Chat Application that enables users to send and receive messages seamlessly. Built with a full stack approach using React for the frontend and Node.js with Socket.io for instant message delivery, this app provides a smooth chatting experience for one-on-one or group communication.",
    },
  ],
};

// =======================
// Helper Functions
// =======================

function getProjectHTML(project) {
  return `
    <div class="project_container">
      <div class="project_title_box">
        <div class="project_title">
          <h3>
            <a href="${
              project.link || "#"
            }" target="_blank" rel="noopener noreferrer">
              ${project.title}
            </a>
          </h3>
        </div>
        <div class="project_tags">
          ${project.tech
            .map((tech) => `<div class="project_tech">${tech}</div>`)
            .join("")}
        </div>
      </div>
      
      <div class="project_video">
  ${
    project.video
      ? `
        <div class="video-wrapper">
          <video 
            autoplay 
            loop 
            muted 
            playsinline 
            preload="metadata"
            style="width: 100%; height: 100%; object-fit: cover; border-radius: 9px;"
          >
            <source src="${project.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="video-buttons">
            <a href="${
              project.codeLink || "#"
            }" target="_blank" rel="noopener noreferrer" class="video-btn">Code</a>
            <a href="${
              project.link || "#"
            }" target="_blank" rel="noopener noreferrer" class="video-btn">Site</a>
          </div>
        </div>
      `
      : `
        <div class="video-wrapper no-video">
          <p style="color:#fff; font-size:1rem; text-align:center;">No video available</p>
          <div class="video-buttons always-show">
            <a href="${
              project.codeLink || "#"
            }" target="_blank" rel="noopener noreferrer" class="video-btn">Code</a>
            ${
              project.link
                ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="video-btn">Site</a>`
                : ""
            }
          </div>
        </div>
      `
  }
</div>


      
      <div class="project_point">
        <div class="project_title"><h3>Key Features:</h3></div>
        <div class="project_bulletin">
          ${project.features
            .map(
              (f) => `
              <div class="bulletin">
                <i class="fa-solid fa-circle-chevron-right"></i>
                <span>${f}</span>
              </div>
              `
            )
            .join("")}
        </div>
      </div>
      
      <div class="project_info">
        <p>${project.description}</p>
      </div>
    </div>
  `;
}

// =======================
// Main Project Tag and Display Logic
// =======================
const container = document.querySelector(".project_tags_row");
const prevBtn = document.querySelector(".tags-scroll-btn.prev");
const nextBtn = document.querySelector(".tags-scroll-btn.next");
const catButtons = document.querySelectorAll(".project_button");

let activeCategory = "Basic";
let activeProjectTag = projectsData[activeCategory][0]?.tag;

// Update chevron button visibility and disabled state
function updateButtons() {
  if (!container || !prevBtn || !nextBtn) return;

  const totalTags = container.querySelectorAll(".project_small_tag").length;
  const containerWidth = container.clientWidth;
  const tagWidth =
    container.querySelector(".project_small_tag")?.offsetWidth || 100;
  const visibleTags = Math.floor(containerWidth / tagWidth);

  if (totalTags <= visibleTags) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    prevBtn.style.visibility = "hidden";
    nextBtn.style.visibility = "hidden";
    return;
  }

  prevBtn.style.visibility = "visible";
  nextBtn.style.visibility = "visible";

  prevBtn.disabled = container.scrollLeft <= 0;
  nextBtn.disabled =
    container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
}

// Render project tags for selected category and selected tag
function renderProjectTags(category, selectedTag) {
  if (!container) return;
  const projects = projectsData[category] || [];
  container.innerHTML = projects
    .map(
      (proj) =>
        `<div class="project_small_tag project_tag_selector ${
          selectedTag === proj.tag ? "selected-tag" : ""
        }" data-tag="${
          proj.tag
        }" style="cursor:pointer; transition:all 0.2s;">${proj.tag}</div>`
    )
    .join("");
  updateButtons();
}

// Show project card for category and tag
function showProject(category, tag) {
  const card = document.getElementById("projectCard");
  const project = (projectsData[category] || []).find((p) => p.tag === tag);
  if (!project) return;

  card.classList.add("flipping");
  setTimeout(() => {
    card.innerHTML = getProjectHTML(project);
    card.classList.remove("flipping");
  }, 400);
}

// Get ordered tags for current displayed tags
function getCurrentTags() {
  if (!container) return [];
  return Array.from(container.querySelectorAll(".project_small_tag")).map(
    (tagDiv) => tagDiv.getAttribute("data-tag")
  );
}

// Change active selected tag, update UI and scroll
function setActiveTag(tag) {
  if (activeProjectTag === tag) return;
  activeProjectTag = tag;
  renderProjectTags(activeCategory, activeProjectTag);
  showProject(activeCategory, activeProjectTag);

  const activeTagDiv = container.querySelector(
    `.project_small_tag[data-tag="${tag}"]`
  );
  if (activeTagDiv) {
    const containerRect = container.getBoundingClientRect();
    const tagRect = activeTagDiv.getBoundingClientRect();
    const offset =
      tagRect.left -
      containerRect.left -
      container.clientWidth / 2 +
      tagRect.width / 2;
    container.scrollBy({ left: offset, behavior: "smooth" });
  }

  updateButtons();
}

// =======================
// Event Listeners Setup
// =======================

// Category Buttons
catButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("selected")) return;
    catButtons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    activeCategory = btn.getAttribute("data-category");
    activeProjectTag = projectsData[activeCategory][0]?.tag;
    renderProjectTags(activeCategory, activeProjectTag);
    showProject(activeCategory, activeProjectTag);
  });
});

// Project Tag Clicks
container?.addEventListener("click", (e) => {
  const div = e.target.closest(".project_tag_selector");
  if (!div) return;
  const tag = div.getAttribute("data-tag");
  if (tag === activeProjectTag) return;
  setActiveTag(tag);
});

// Chevron Button Clicks & Scroll Handling
document.addEventListener("DOMContentLoaded", () => {
  if (!container || !prevBtn || !nextBtn) return;

  const scrollAmount =
    container.querySelector(".project_small_tag")?.offsetWidth || 100;

  prevBtn.addEventListener("click", () => {
    const tags = getCurrentTags();
    const currentIndex = tags.indexOf(activeProjectTag);
    if (currentIndex > 0) {
      setActiveTag(tags[currentIndex - 1]);
    }
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    const tags = getCurrentTags();
    const currentIndex = tags.indexOf(activeProjectTag);
    if (currentIndex < tags.length - 1) {
      setActiveTag(tags[currentIndex + 1]);
    }
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  container.addEventListener("scroll", updateButtons);

  window.addEventListener("resize", updateButtons);

  updateButtons();
});

// =======================
// Initial Render After DOM Loaded
// =======================
window.addEventListener("DOMContentLoaded", () => {
  renderProjectTags(activeCategory, activeProjectTag);
  showProject(activeCategory, activeProjectTag);
});

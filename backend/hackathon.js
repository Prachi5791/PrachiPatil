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

  // ----- Your hackData -----
  const hackData = [
    {
      id: "hackathon1",
      title: "International Women’s Hackathon",
      subtitle: "RAIT, Nerul · Team Leader",
      image: "frontend/assets/13.png",
      shortDescription:
        "Led a cross-functional team in a two-phase international hackathon, building an interactive multi-language learning platform and a women’s safety application with real-time SOS detection.",
      fullBlog: `
      <p>
        I had the opportunity to lead a diverse team during the International Women’s Hackathon organized by RAIT, Nerul. The event was conducted in two distinct phases, each pushing us to think creatively and practically.
      </p>

      <p><strong>Phase 1 – Ideation & Proposal</strong></p>
      <p>
        We designed an interactive vocabulary learning website that adapted daily exercises based on user responses. The platform supported multiple languages and focused on emotion-based learning to keep users engaged.
      </p>

      <p><strong>Phase 2 – Development</strong></p>
      <p>
        We built a women’s safety application that suggested optimal travel routes and activated the microphone in high-risk zones. If SOS signals or distress sounds were detected, the app recorded audio and alerted nearby police stations and emergency contacts. It also supported anonymous complaint reporting.
      </p>

      <p>
        Our team — Mangul (Design), Jyostna (Documentation), Samruddhi (Backend), and myself (Team Leader & Backend Lead) — collaborated closely throughout the event. Although we didn’t win, the experience was deeply rewarding.
      </p>

      <p><strong>What I Learned</strong></p>
      <ul>
        <li>Leading a team under time pressure and coordinating responsibilities</li>
        <li>Designing safety-focused, real-world applications</li>
        <li>Translating ideas into scalable technical solutions</li>
        <li>Importance of clear communication and adaptability</li>
      </ul>
    `,
    },

    {
      id: "hackathon2",
      title: "Hackathon at Walchand College",
      subtitle: "Walchand College · Team Player",
      image: "frontend/assets/14.png",
      shortDescription:
        "Collaborated in a unique no-voice-track hackathon, enhancing an interactive vocabulary platform through silent coordination and teamwork.",
      fullBlog: `
      <p>
        This hackathon at Walchand College introduced a unique challenge — no verbal communication was allowed. As a team player, I contributed actively while adapting to this constraint.
      </p>

      <p>
        We continued developing our interactive vocabulary learning platform, focusing on refining features, improving usability, and ensuring a smooth learning experience.
      </p>

      <p>
        The restriction pushed us to rely on planning, gestures, and written communication, strengthening non-verbal collaboration.
      </p>

      <p><strong>What I Learned</strong></p>
      <ul>
        <li>Effective collaboration without verbal communication</li>
        <li>Importance of planning and task clarity</li>
        <li>Adaptability in unconventional problem-solving environments</li>
        <li>Strong team coordination under constraints</li>
      </ul>
    `,
    },

    {
      id: "hackathon3",
      title: "36-Hour Hackathon",
      subtitle: "Pillai College, Rasayani · Team Member",
      image: "frontend/assets/10.png",
      shortDescription:
        "Built a personalized travel recommendation app by combining social media trends, weather data, and local guide insights in an intense 36-hour hackathon.",
      fullBlog: `
      <p>
        The 36-hour hackathon at Pillai College, Rasayani, was one of the most intense experiences I’ve had. Our goal was to design a travel-focused application for tourists and solo travelers.
      </p>

      <p>
        The app scraped trending travel content from social media platforms such as Instagram Reels and Shorts, analyzed nearby locations, and combined this with real-time weather data to provide personalized travel recommendations. We also integrated local guide contacts to enhance on-ground experiences.
      </p>

      <p>
        Working under extreme time constraints sharpened our decision-making and execution skills.
      </p>

      <p><strong>What I Learned</strong></p>
      <ul>
        <li>Rapid prototyping and decision-making</li>
        <li>Integrating multiple data sources into a single solution</li>
        <li>Handling pressure in long-duration hackathons</li>
        <li>Designing user-centric features under time limits</li>
      </ul>
    `,
    },

    {
      id: "course1",
      title: "AI Using Python Training",
      subtitle: "L&T Skill Trainers Academy · Participant",
      image: "frontend/assets/12.png",
      shortDescription:
        "Completed an intensive one-week AI training program covering Python, data visualization, regression, classification, and professional communication skills.",
      fullBlog: `
      <p>
        I completed a one-week residential AI using Python training program at L&T Skill Trainers Academy. The program balanced technical learning with personal development.
      </p>

      <p>
        Mornings began with wellness activities such as yoga and aerobics. Technical sessions covered AI fundamentals, Python programming, data visualization, and hands-on projects involving regression and classification models.
      </p>

      <p>
        Evening sessions focused on communication skills, interview preparation, and confidence-building activities.
      </p>

      <p><strong>What I Learned</strong></p>
      <ul>
        <li>Foundations of AI and machine learning using Python</li>
        <li>Hands-on experience with regression and classification models</li>
        <li>Data visualization techniques for analysis and storytelling</li>
        <li>Professional communication and interview readiness</li>
      </ul>
    `,
    },
    {
      id: "expo1",
      title: "Automation Expo 2025 – Industry 4.0 Exposure",
      subtitle: "Mumbai · educational Visit",
      image: "frontend/assets/11.png",
      shortDescription:
        "Gained hands-on exposure to Industry 4.0 technologies at Automation Expo 2025, exploring real-world applications of robotics, AI, IoT, 3D scanning, and enterprise ERP systems.",
      fullBlog: `
    <p>
      I attended Automation Expo 2025 as part of an educational visit organized by the Department of Computer Engineering. The visit focused on understanding how modern industries integrate automation, robotics, AI, IoT, and ERP solutions in real-world environments.
    </p>

    <p>
      Key highlights included a 360° 3D scanning demonstration by Woll, showcasing how physical objects can be converted into precise digital models for manufacturing and product design. Interactions with companies like SAP, Crest, and Solution One provided insights into enterprise-grade ERP systems and cloud-enabled workflow automation.
    </p>

    <p>
      A major attraction was the demonstration of collaborative robots (cobots) by Universal Robots and IMPAQT Robotics, illustrating how humans and machines work together safely in industrial settings. Advanced sensor technologies by SinceVision further emphasized the role of sensors in Industry 4.0.
    </p>

    <p><strong>What I Learned</strong></p>
    <ul>
      <li>Practical applications of Industry 4.0 technologies</li>
      <li>Role of ERP systems in automating industrial workflows</li>
      <li>Use of collaborative robots in manufacturing and precision tasks</li>
      <li>Importance of sensors and 3D scanning in modern automation</li>
      <li>How AI, IoT, and automation intersect in real-world industries</li>
    </ul>
  `,
    },
  ];

  // ----- Build Cards -----
  const hac_container = document.querySelector(".hac_container");

  function getHackHTML(hack) {
    return `
    <div class="hac_card">
      <div class="project_head">
        <h3>${hack.title}</h3>
        <p class="subhead">${hack.subtitle}</p>
      </div>
      <div class="hac_image"><img src="${hack.image}" alt="Hackathon" /></div>
      <p class="hac_description">
        ${hack.shortDescription}
      </p>
      ${
        hack.fullBlog && hack.fullBlog.trim() !== ""
          ? `<a href="#" class="learn-more" data-id="${hack.id}">Learn More ➜</a>`
          : ``
      }
    </div>
  `;
  }

  hac_container.innerHTML = hackData.map(getHackHTML).join("");

  // ----- Modal Setup -----
  const modal = document.getElementById("infoModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");
  const closeBtn = document.querySelector(".close");

  // Open modal when Learn More is clicked
  hac_container.addEventListener("click", function (e) {
    if (e.target.classList.contains("learn-more")) {
      e.preventDefault();
      const id = e.target.dataset.id;
      const hack = hackData.find((h) => h.id === id);
      if (hack) {
        modalTitle.textContent = hack.title;
        modalContent.innerHTML = hack.fullBlog;
        modal.style.display = "block";
      }
    }
  });

  // Close modal
  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // ----- Slider / Grid toggle logic -----
  let hac_cards = document.querySelectorAll(".hac_card");
  if (!hac_container || hac_cards.length === 0) return;

  const hac_cardWidth = hac_cards[0].offsetWidth;
  const hac_gap = 30;
  const hac_visibleCards = 3;
  let hac_currentIndex = 0;
  const totalCards = hac_cards.length;

  // Clone first 3 cards for infinite scroll
  for (let i = 0; i < hac_visibleCards; i++) {
    const clone = hac_cards[i].cloneNode(true);
    clone.classList.add("cloned-card");
    hac_container.appendChild(clone);
  }

  hac_cards = document.querySelectorAll(".hac_card");

  hac_container.style.transition = "transform 0.5s ease";

  function hac_moveSlider() {
    hac_currentIndex++;
    const shiftAmount = hac_currentIndex * (hac_cardWidth + hac_gap);
    hac_container.style.transform = `translateX(-${shiftAmount}px)`;

    if (hac_currentIndex === totalCards) {
      setTimeout(() => {
        hac_container.style.transition = "none";
        hac_currentIndex = 0;
        hac_container.style.transform = "translateX(0)";
        hac_container.offsetHeight; // reflow
        hac_container.style.transition = "transform 0.5s ease";
      }, 500);
    }
  }

  let myInterval = setInterval(hac_moveSlider, 3000);

  const view_more_btn = document.querySelector(".view_more_btn button");
  let isGridView = false;
  view_more_btn?.addEventListener("click", () => {
    if (!isGridView) {
      clearInterval(myInterval);
      hac_container.style.transform = "none";
      hac_container.style.transition = "none";
      hac_container.style.display = "grid";
      hac_container.style.gridTemplateColumns = "repeat(3, 1fr)";
      hac_container.style.gridAutoRows = "1fr";
      hac_container.style.height = "auto";

      document.querySelectorAll(".cloned-card").forEach((card) => {
        card.style.display = "none";
      });

      view_more_btn.textContent = "Back to Scroll";
    } else {
      document.querySelectorAll(".cloned-card").forEach((card) => {
        card.style.display = "";
      });
      hac_container.style.display = "flex";
      hac_container.style.gridTemplateColumns = "";
      hac_container.style.gridAutoRows = "";
      hac_container.style.height = "";

      hac_container.style.transition = "transform 0.5s ease";
      const shiftAmount = hac_currentIndex * (hac_cardWidth + hac_gap);
      hac_container.style.transform = `translateX(-${shiftAmount}px)`;

      myInterval = setInterval(hac_moveSlider, 3000);
      view_more_btn.textContent = "View More";
    }
    isGridView = !isGridView;
  });
});

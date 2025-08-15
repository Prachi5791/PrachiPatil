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
      title: "International Women's Hackathon at RAIT, Nerul",
      subtitle: "RAIT, Nerul · Team Leader",
      // image: "/frontend/assets/1.png",
      shortDescription:
        "Led a talented team through a two-phase international hackathon, creating an interactive multi-language vocabulary website and a women’s safety app with real-time SOS detection and optimal travel path features.",
      fullBlog:
        "<p>I had the incredible opportunity to lead a dynamic team during the International Women's Hackathon organized by RAIT, Nerul. The competition was structured in two phases:</p><p><strong>Phase 1</strong>: We submitted a project proposal presentation on given topics. Our team chose to develop a cutting-edge vocabulary learning website featuring an interactive and emotion-based learning experience. The platform engaged users by asking tailored questions in multiple languages and adapting daily exercises based on responses.</p><p><strong>Phase 2</strong>: We built a women's safety application designed to guide users on optimal travel routes and enhance safety by activating the microphone in high-risk areas. If any SOS signals or screams were detected, the app recorded audio and automatically alerted the nearest police station and emergency contacts. It also allowed anonymous complaint reporting.</p><p>Our team — Mangul (Designer), Jyostna (Documentation), Samruddhi (Backend), and myself (Team Leader & Backend Lead) — gave our best. Though we didn’t win, it was a rich learning experience that improved our skills and teamwork.</p>",
    },
    {
      id: "hackathon2",
      title: "Hackathon at Walchand College",
      subtitle: "Walchand College · Team Player",
      shortDescription:
        "Participated as a collaborative team player in a no-voice-track hackathon, continuing development of the interactive vocabulary project with strong teamwork and innovation.",
      fullBlog:
        "<p>My second hackathon was at Walchand College, featuring a unique no-voice-track rule that challenged our communication skills. I participated as a dedicated team player, collaborating actively to keep our project moving smoothly.</p><p>We chose to continue developing our interactive vocabulary project. Despite the communication restrictions, we improved essential features, focused on user interaction, and ensured a smooth user experience.</p><p>This event emphasized the power of silent collaboration, adaptability, and teamwork under unique constraints.</p>",
    },
    {
      id: "hackathon3",
      title: "36-Hour Hackathon at Pillai College, Rasayani",
      subtitle: "Pillai College, Rasayani · Team Member",
      shortDescription:
        "Tackled a challenging 36-hour hackathon, building a travel app that combined social media trends, weather-based recommendations, and local guides for personalized travel experiences.",
      fullBlog:
        "<p>The 36-hour hackathon at Pillai College, Rasayani, was one of the toughest yet most exciting experiences I've had. Our team set out to create an innovative app for tourists, solo travelers, and travel enthusiasts alike.</p><p>The app scraped data from social media platforms like Instagram Reels and Shorts to discover trending locations nearby. Then, using weather data, it tailored the recommendations for travelers. To make trips more insightful, we also included contacts of local guides who could assist visitors.</p><p>The intense time frame forced us to think quickly, collaborate efficiently, and innovate under pressure, giving me a deeper understanding of blending tech solutions with real-world user needs.</p>",
    },
    {
      id: "course1",
      title: "AI using Python Training at L&T Skill Trainer Academy",
      subtitle: "L&T Skill Trainer Academy · Participant",
      shortDescription:
        "Completed an intensive one-week AI course with interactive lectures, hands-on Python projects in data visualization, regression & classification modeling, plus communication skills training.",
      fullBlog:
        "<p>I attended a one-week AI using Python training program at L&T Skill Trainer Academy — an intense schedule balancing technical learning, wellness, and personal development.</p><p>Each morning began with invigorating yoga, aerobics, or Zumba sessions. From 9 AM, we engaged in interactive lectures with a master trainer, covering AI concepts. Lab sessions focused on implementing data visualization, learning Python, and completing projects in regression and classification modeling.</p><p>Evenings brought communication skills classes aimed at personal growth — fun activities, interview tips, and confidence-building exercises.</p><p>This course offered an excellent snapshot of AI and machine learning basics, along with essential soft skills for professional growth.</p>",
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
      <div class="hac_image"></div>
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

/**
 * DRIESSEN ARCHITECTUUR - INTERACTIVE LOGIC & ANIMATIONS
 * Matches driessenarchitectuur.nl behavior and 1.png through 11.png
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. DYNAMIC FLOATING ISLAND HEADER ON SCROLL
     ========================================================================== */
  const header = document.getElementById("siteHeader");
  let lastScrollY = window.scrollY;
  const scrollThreshold = 35;
  let scrollTicking = false;

  const handleScroll = () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Toggle pill background (transparent at top matching 1.png, pill on scroll matching 2.png)
        if (currentScrollY > scrollThreshold) {
          header.classList.add("is-scrolled");
        } else {
          header.classList.remove("is-scrolled");
        }

        // Smart hide on fast downscroll, show on upscroll
        if (currentScrollY > 180) {
          if (currentScrollY > lastScrollY + 12) {
            header.classList.add("is-hidden");
          } else if (currentScrollY < lastScrollY - 8) {
            header.classList.remove("is-hidden");
          }
        } else {
          header.classList.remove("is-hidden");
        }

        lastScrollY = currentScrollY;
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check

  /* ==========================================================================
     2. HAMBURGER FULLSCREEN DRAWER MENU
     ========================================================================== */
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const menuDrawer = document.getElementById("menuDrawer");
  const drawerLinks = document.querySelectorAll(".drawer-nav-item a, .drawer-footer a, .drawer-footer button");

  const toggleDrawer = () => {
    const isOpen = menuDrawer.classList.contains("open");
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  const openDrawer = () => {
    menuDrawer.classList.add("open");
    hamburgerBtn.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    menuDrawer.classList.remove("open");
    hamburgerBtn.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (hamburgerBtn && menuDrawer) {
    hamburgerBtn.addEventListener("click", toggleDrawer);
    drawerLinks.forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });
  }

  /* Smooth anchor scrolling for index.html#... links when already on the home page */
  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      
      const currentPath = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\/$/, "");
      const targetUrl = new URL(anchor.href, window.location.href);
      const targetPath = targetUrl.pathname.replace(/\/index\.html$/, "/").replace(/\/$/, "");

      if (currentPath === targetPath && targetUrl.hash) {
        const targetEl = document.querySelector(targetUrl.hash);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
          history.pushState(null, "", targetUrl.hash);
        }
      }
    });
  });

  /* ==========================================================================
     3. VIDEO AUTOPLAY ON SCROLL & HOVER
     ========================================================================== */
  const videoElements = document.querySelectorAll("video[data-autoplay-on-scroll]");
  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    videoElements.forEach((video) => {
      videoObserver.observe(video);
    });
  }

  // Hover video play for project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    const cardVideo = card.querySelector("video");
    if (cardVideo) {
      card.addEventListener("mouseenter", () => {
        const p = cardVideo.play();
        if (p !== undefined) p.catch(() => {});
      });
      card.addEventListener("mouseleave", () => {
        cardVideo.pause();
      });
    }
  });

  /* ==========================================================================
     4. PROJECT CASE STUDIES LIGHTBOX DRAWER
     ========================================================================== */
  const PROJECT_DATA = {
    "cement-industry": {
      title: "Cement Industry Engineering Services",
      category: "Industrial Engineering · Pyroprocessing",
      sector: "Cement & Mineral Plants",
      delivery: "Concept to Detailed FEED & Commissioning",
      standards: "ASME, ASTM, DIN, ISO, API",
      type: "image",
      src: "assets/images/CEMENTPLANT.png",
      summary: "Engineer smarter industrial solutions—from Concept and Simulation to Detailed design, GA drawings, pyroprocessing ductwork, FEA/CFD, and successful project delivery.",
      sections: [
        {
          title: "Engineering & Project Development",
          items: [
            "Feasibility Studies & Techno-Economic Assessments",
            "Conceptual Engineering & Layout Optimization",
            "Front-End Engineering Design (FEED)",
            "Detailed 3D Plant & Equipment Engineering",
            "EPC/EPCM Tender Engineering Support",
            "Technical Advisory & Peer Design Reviews",
            "Project Management & Engineering Coordination"
          ]
        },
        {
          title: "Plant Engineering & Detailed Design",
          items: [
            "Cement Plant Layout Development & Integration",
            "General Arrangement (GA) Drawings & Equipment Datasheets",
            "Platework Engineering (Process Gas Ducts, Transfer Chutes)",
            "Dedusting Ductwork & High-Capacity Baghouse Layouts",
            "Raw Meal Silos, Clinker Hoppers & Transition Pieces",
            "Piping Layout, Routing Studies & CAESAR II Analysis"
          ]
        },
        {
          title: "Computational Fluid Dynamics (CFD)",
          items: [
            "Kiln Burner Aerodynamics & Combustion Modeling",
            "Calciner Performance & Thermal Flow Simulation",
            "Cyclone & Multi-Stage Preheater Flow Analysis",
            "Clinker Cooler Airflow & Heat Recovery Optimization",
            "High-Efficiency Dynamic Separator Performance",
            "Dust Dispersion & Dedusting Bagfilter Airflow"
          ]
        },
        {
          title: "Finite Element Analysis (FEA)",
          items: [
            "Static Structural & Thermal Stress Verification",
            "High-Temperature Ductwork & Bellows Fatigue Life",
            "Buckling & Stability Assessment of Large Silos",
            "Dynamic & Modal Vibration Analysis for Heavy Fans",
            "Structural Integrity Verification for Stacker Reclaimers"
          ]
        }
      ],
      software: ["AutoCAD", "SolidWorks", "Tekla Structures", "ANSYS Fluent (CFD)", "ANSYS Mechanical (FEA)", "CAESAR II"]
    },

    "mining-minerals": {
      title: "Mining & Mineral Processing Engineering Services",
      category: "Mineral Processing · Slurry & Material Handling",
      sector: "Mining, Beneficiation & Metals",
      delivery: "Feasibility Studies to Detailed Slurry Design",
      standards: "ASME, ASTM, DIN, ISO, API",
      type: "image",
      src: "assets/images/MINE.png",
      summary: "Engineer efficient mining and mineral processing plants—from feasibility studies and layout design to advanced slurry flow simulation, transfer chute design, and structural verification.",
      sections: [
        {
          title: "Engineering & Project Development",
          items: [
            "Feasibility Studies & Techno-Economic Assessments",
            "Conceptual Mine & Process Plant Engineering",
            "Front-End Engineering Design (FEED) & Flowsheets",
            "Detailed Engineering & EPCM Tender Support",
            "Technical Advisory, Design Audits & Reviews",
            "Turnkey Project Management & Field Coordination"
          ]
        },
        {
          title: "Plant Engineering & Material Handling",
          items: [
            "Mine & Beneficiation Plant Layout Development",
            "General Arrangement (GA) Drawings & Equipment Layouts",
            "Platework Engineering (Transfer Chutes, Process Ducts)",
            "Hoppers, Storage Bins, Liners & Wear Plates",
            "Overland Conveyor Transitions & Transfer Towers",
            "Slurry Piping Layout & Routing Studies"
          ]
        },
        {
          title: "CFD & Hydro-Simulation",
          items: [
            "Mine Ventilation & Underground Airflow Simulation",
            "Slurry Flow & Hydraulic Pressure Drop Analysis",
            "Dust Dispersion & Dedicated Dust Collection Systems",
            "Crushing, Screening & Transfer Chute Particle Flow",
            "Cyclone & Hydrocyclone Separation Optimization",
            "Pneumatic Conveying Aerodynamics & Velocity Tuning"
          ]
        },
        {
          title: "FEA Structural & Fatigue Verification",
          items: [
            "Heavy Crushing & Grinding Mill Foundation Stress",
            "Vibrating Screen & Feeder Dynamic Fatigue Analysis",
            "Structural Buckling & Transient Thermal Stress Analysis",
            "Vibration & Resonance Mitigation for Slurry Pumps"
          ]
        }
      ],
      software: ["AutoCAD", "SolidWorks", "Tekla Structures", "ANSYS Fluent", "ANSYS Mechanical", "Rocky DEM"]
    },

    "oil-gas": {
      title: "Oil & Gas - Upstream and Downstream",
      category: "Energy · Upstream & Downstream Refining",
      sector: "Hydrocarbon & Petrochemical Refining",
      delivery: "Concept, Detailed FEED, 3D Piping & CAESAR II",
      standards: "ASME B31.3 / B31.1, API 610/650, DIN, ISO",
      type: "image",
      src: "assets/images/OIL.png",
      summary: "Comprehensive oil and gas engineering solutions—from exploration and production to refining, detailed 3D piping layouts, pipe stress analysis, and civil/structural engineering.",
      sections: [
        {
          title: "Upstream Engineering Services",
          items: [
            "Offshore & Onshore Feasibility & Concept Studies",
            "Detailed Mechanical & Process Engineering",
            "Skid-Mounted Process Equipment & Vessel Design",
            "Wellhead & Flowline Piping Layout Engineering",
            "Civil, Structural & Marine Platform Analysis",
            "Process Flow Simulation & Hydraulic Calculations"
          ]
        },
        {
          title: "Downstream Refining & Petrochemicals",
          items: [
            "FEED & Detailed Engineering for Refining Units",
            "Complex Piping Engineering & Equipment Nozzle Loads",
            "High-Temperature CAESAR II Pipe Stress Analysis",
            "Plant Layout & AVEVA E3D 3D Plant Walkthrough Modeling",
            "Civil Foundation & Steel Pipe Rack Structural Design",
            "API Storage Tanks & Pressure Vessel Verification"
          ]
        }
      ],
      software: ["AutoCAD Plant 3D", "AVEVA E3D", "SolidWorks", "CAESAR II", "ANSYS Fluent", "ANSYS Mechanical"]
    },

    "manpower-services": {
      title: "Engineering Manpower Deputation & Recruitment Services",
      category: "Workforce Solutions · Technical Deputation",
      sector: "Global Multi-Disciplinary Engineering",
      delivery: "Rapid Short- & Long-Term Deployment / Permanent Talent",
      standards: "Global EPC Compliance, ISO 9001 QA/QC, HSE Standards",
      type: "image",
      src: "assets/images/MANPOWER.png",
      summary: "Deploy qualified engineering and technical professionals for short-term and long-term project assignments, technical writing, QA/QC, and permanent engineering talent acquisition worldwide.",
      sections: [
        {
          title: "Engineering Manpower Deputation",
          items: [
            "Short-Term & Long-Term Technical Manpower Deployment",
            "Project-Based Engineering Resource Augmentation",
            "Onsite & Offshore Commissioning and Start-up Support",
            "Engineering Technical Writer & Manuals Deployment",
            "Senior Engineering Design & CAD Drafting Personnel",
            "Project Management & Planning / Controls Professionals"
          ]
        },
        {
          title: "Technical Recruitment & Talent Acquisition",
          items: [
            "Permanent Global Engineering Recruitment Services",
            "Specialized Contract & Temporary Staffing Solutions",
            "Rigorous Multi-Stage Candidate Sourcing & Technical Screening",
            "Executive Interview Coordination & Qualification Verification",
            "Rapid Onboarding & International Mobilization Support"
          ]
        },
        {
          title: "11 Engineering Disciplines Covered",
          items: [
            "Mechanical Engineering",
            "Civil & Structural Engineering",
            "Process & Chemical Engineering",
            "Piping & Stress Analysis Engineering",
            "Electrical & High-Voltage Systems",
            "Instrumentation & Control (I&C / SCADA)",
            "Project Planning & Controls (Primavera P6)",
            "Procurement & Supply Chain Management",
            "QA/QC Quality Assurance & Inspection Leads",
            "HSE (Health, Safety & Environment) Specialists",
            "CAD Designers & Tekla 3D Modelers"
          ]
        },
        {
          title: "Key Industries Supported Worldwide",
          items: [
            "Cement & Heavy Building Materials",
            "Mining & Mineral Beneficiation Plants",
            "Oil & Gas (Upstream Offshore & Downstream Refineries)",
            "Power Generation & Renewable Energy",
            "Metals, Metallurgy & Heavy Manufacturing"
          ]
        }
      ],
      software: ["AutoCAD", "Tekla Structures", "AVEVA E3D", "SolidWorks", "ANSYS", "Primavera P6"]
    }
  };

  // Backwards compatibility aliases for existing IDs
  PROJECT_DATA["cement-pyroprocessing"] = PROJECT_DATA["cement-industry"];
  PROJECT_DATA["bulk-materials"] = PROJECT_DATA["mining-minerals"];
  PROJECT_DATA["kiln-cfd"] = PROJECT_DATA["cement-industry"];
  PROJECT_DATA["refinery-piping"] = PROJECT_DATA["oil-gas"];
  PROJECT_DATA["structural-fea"] = PROJECT_DATA["mining-minerals"];
  PROJECT_DATA["platework-engineering"] = PROJECT_DATA["cement-industry"];
  PROJECT_DATA["manpower-deputation"] = PROJECT_DATA["manpower-services"];

  const caseStudyModal = document.getElementById("caseStudyModal");
  const caseStudyBackdrop = document.getElementById("caseStudyBackdrop");
  const caseStudyClose = document.getElementById("caseStudyClose");
  const caseStudyContent = document.getElementById("caseStudyContent");

  const openCaseStudy = (projectId) => {
    const data = PROJECT_DATA[projectId];
    if (!data || !caseStudyModal || !caseStudyContent) return;

    let mediaHtml = `
      <div class="cs-hero-media">
        <img src="${data.src}" alt="${data.title}">
      </div>
    `;

    let sectionsHtml = "";
    if (data.sections && data.sections.length > 0) {
      sectionsHtml = data.sections.map(sec => `
        <div class="cs-section-box">
          <h4 class="cs-section-title">
            <span class="badge-dot"></span>
            <span>${sec.title}</span>
          </h4>
          <ul class="cs-deliverables-list">
            ${sec.items.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `).join("");
    }

    let softwareHtml = "";
    if (data.software && data.software.length > 0) {
      softwareHtml = `
        <div class="cs-section-box" style="margin-top: 1.5rem;">
          <h4 class="cs-section-title">
            <span class="badge-dot"></span>
            <span>Software Stack & Analytical Tools</span>
          </h4>
          <div class="cs-software-pills">
            ${data.software.map(sw => `<span class="cs-software-tag">${sw}</span>`).join("")}
          </div>
        </div>
      `;
    }

    const contactUrl = window.location.pathname.includes('/pages/') ? 'Contact.html' : 'pages/Contact.html';

    caseStudyContent.innerHTML = `
      ${mediaHtml}
      <div class="cs-category-badge">
        <span class="badge-pill">
          <span class="badge-dot"></span>
          <span>${data.category}</span>
        </span>
      </div>
      <h2 class="cs-title">${data.title}</h2>
      <div class="cs-specs-grid">
        <div class="cs-spec-col">
          <p class="cs-spec-label">Industry Sector</p>
          <p class="cs-spec-val">${data.sector || "Industrial Plants"}</p>
        </div>
        <div class="cs-spec-col">
          <p class="cs-spec-label">Execution Scope</p>
          <p class="cs-spec-val">${data.delivery || "Turnkey Engineering"}</p>
        </div>
        <div class="cs-spec-col">
          <p class="cs-spec-label">Code Standards</p>
          <p class="cs-spec-val">${data.standards || "ASME, ASTM, DIN, ISO, API"}</p>
        </div>
      </div>
      <p class="cs-description">${data.summary}</p>
      ${sectionsHtml}
      ${softwareHtml}
      <div class="cs-action-row" style="margin-top: 2rem;">
        <a href="https://wa.me/917604852835?text=Hello%20VQube%20Technologies%2C%20I%20would%20like%20to%20discuss%20${encodeURIComponent(data.title)}" target="_blank" rel="noopener" class="btn btn-sage">
          <span>CONSULT ON THIS SCOPE</span>
          <span class="btn-arrow-wrap">
            <svg class="btn-arrow btn-arrow-main" width="12" height="12" viewBox="0 0 14 14"><path d="M1 7h12M8 2l5 5-5 5" /></svg>
            <svg class="btn-arrow btn-arrow-clone" width="12" height="12" viewBox="0 0 14 14"><path d="M1 7h12M8 2l5 5-5 5" /></svg>
          </span>
        </a>
        <a href="${contactUrl}" class="btn btn-dark">
          <span>SUBMIT PROJECT INQUIRY</span>
        </a>
        <button class="btn btn-outline-dark cs-close-btn">
          <span>CLOSE VIEW</span>
        </button>
      </div>
    `;

    caseStudyModal.classList.add("open");
    document.body.style.overflow = "hidden";

    // Bind close inside modal
    const closeBtn = caseStudyContent.querySelector(".cs-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeCaseStudy);
    }

    if (caseStudyClose) caseStudyClose.focus();
  };

  const closeCaseStudy = () => {
    if (!caseStudyModal) return;
    caseStudyModal.classList.remove("open");
    document.body.style.overflow = "";
    // Pause any playing video inside
    const activeVideo = caseStudyContent.querySelector("video");
    if (activeVideo) activeVideo.pause();
  };

  projectCards.forEach((card) => {
    const pid = card.getAttribute("data-project-id");
    if (pid) {
      card.addEventListener("click", () => openCaseStudy(pid));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openCaseStudy(pid);
        }
      });
    }
  });

  if (caseStudyClose) caseStudyClose.addEventListener("click", closeCaseStudy);
  if (caseStudyBackdrop) caseStudyBackdrop.addEventListener("click", closeCaseStudy);

  /* ==========================================================================
     5. WATCH FILM VIDEO LIGHTBOX MODAL WITH FULL CONTROLS
     ========================================================================== */
  const watchFilmBtns = document.querySelectorAll("[data-open-film-modal]");
  const videoModal = document.getElementById("videoModal");
  const modalVideoPlayer = document.getElementById("modalVideoPlayer");
  const videoModalClose = document.getElementById("videoModalClose");
  const videoPlayPauseBtn = document.getElementById("videoPlayPauseBtn");
  const videoMuteBtn = document.getElementById("videoMuteBtn");
  const videoFullscreenBtn = document.getElementById("videoFullscreenBtn");
  const videoScrubWrap = document.getElementById("videoScrubWrap");
  const videoScrubFill = document.getElementById("videoScrubFill");
  const videoTimeDisplay = document.getElementById("videoTimeDisplay");

  const openVideoModal = () => {
    if (!videoModal || !modalVideoPlayer) return;
    videoModal.classList.add("open");
    document.body.style.overflow = "hidden";
    modalVideoPlayer.currentTime = 0;
    const playP = modalVideoPlayer.play();
    if (playP !== undefined) playP.catch(() => {});
    updatePlayPauseIcon();
    updateMuteIcon();
    if (videoModalClose) videoModalClose.focus();
  };

  const closeVideoModal = () => {
    if (!videoModal || !modalVideoPlayer) return;
    videoModal.classList.remove("open");
    document.body.style.overflow = "";
    modalVideoPlayer.pause();
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  };

  watchFilmBtns.forEach((btn) => btn.addEventListener("click", openVideoModal));
  if (videoModalClose) videoModalClose.addEventListener("click", closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  // Formatting helper
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const updatePlayPauseIcon = () => {
    if (!videoPlayPauseBtn || !modalVideoPlayer) return;
    if (modalVideoPlayer.paused) {
      videoPlayPauseBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>`;
    } else {
      videoPlayPauseBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>`;
    }
  };

  const updateMuteIcon = () => {
    if (!videoMuteBtn || !modalVideoPlayer) return;
    const isMuted = modalVideoPlayer.muted || modalVideoPlayer.volume === 0;
    const unmutedIcon = videoMuteBtn.querySelector(".icon-unmuted");
    const mutedIcon = videoMuteBtn.querySelector(".icon-muted");
    if (unmutedIcon && mutedIcon) {
      if (isMuted) {
        unmutedIcon.style.display = "none";
        mutedIcon.style.display = "block";
      } else {
        unmutedIcon.style.display = "block";
        mutedIcon.style.display = "none";
      }
    }
  };

  if (videoPlayPauseBtn && modalVideoPlayer) {
    videoPlayPauseBtn.addEventListener("click", () => {
      if (modalVideoPlayer.paused) {
        modalVideoPlayer.play();
      } else {
        modalVideoPlayer.pause();
      }
      updatePlayPauseIcon();
    });

    if (videoMuteBtn) {
      videoMuteBtn.addEventListener("click", () => {
        modalVideoPlayer.muted = !modalVideoPlayer.muted;
        updateMuteIcon();
      });
    }

    if (videoFullscreenBtn) {
      videoFullscreenBtn.addEventListener("click", () => {
        const container = videoModal.querySelector(".video-modal-container");
        if (!document.fullscreenElement) {
          if (container && container.requestFullscreen) {
            container.requestFullscreen();
          } else if (modalVideoPlayer.requestFullscreen) {
            modalVideoPlayer.requestFullscreen();
          }
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }

    modalVideoPlayer.addEventListener("timeupdate", () => {
      if (modalVideoPlayer.duration) {
        const percent = (modalVideoPlayer.currentTime / modalVideoPlayer.duration) * 100;
        if (videoScrubFill) videoScrubFill.style.width = `${percent}%`;
        if (videoTimeDisplay) {
          videoTimeDisplay.textContent = `${formatTime(modalVideoPlayer.currentTime)} / ${formatTime(modalVideoPlayer.duration)}`;
        }
      }
    });

    modalVideoPlayer.addEventListener("ended", () => {
      updatePlayPauseIcon();
    });

    if (videoScrubWrap) {
      const seek = (e) => {
        const rect = videoScrubWrap.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        if (modalVideoPlayer.duration) {
          modalVideoPlayer.currentTime = pos * modalVideoPlayer.duration;
        }
      };

      videoScrubWrap.addEventListener("click", seek);

      videoScrubWrap.addEventListener("keydown", (e) => {
        if (!modalVideoPlayer.duration) return;
        if (e.key === "ArrowRight") {
          modalVideoPlayer.currentTime = Math.min(modalVideoPlayer.duration, modalVideoPlayer.currentTime + 5);
        } else if (e.key === "ArrowLeft") {
          modalVideoPlayer.currentTime = Math.max(0, modalVideoPlayer.currentTime - 5);
        }
      });
    }
  }

  /* ==========================================================================
     6. INTERACTIVE TESTIMONIAL QUOTE SLIDER
     ========================================================================== */
  const quoteSlides = document.querySelectorAll(".quote-slide");
  const quoteCounter = document.getElementById("quoteCounter");
  const quotePrevBtns = document.querySelectorAll(".quote-prev-btn");
  const quoteNextBtns = document.querySelectorAll(".quote-next-btn");
  let currentQuoteIndex = 0;
  const totalQuotes = quoteSlides.length;

  const showQuote = (index) => {
    if (totalQuotes === 0) return;
    quoteSlides.forEach((slide) => slide.classList.remove("active"));
    currentQuoteIndex = (index + totalQuotes) % totalQuotes;
    quoteSlides[currentQuoteIndex].classList.add("active");
    if (quoteCounter) {
      const currentFormatted = String(currentQuoteIndex + 1).padStart(2, "0");
      const totalFormatted = String(totalQuotes).padStart(2, "0");
      quoteCounter.textContent = `${currentFormatted} | ${totalFormatted}`;
    }
  };

  quotePrevBtns.forEach((btn) => btn.addEventListener("click", () => showQuote(currentQuoteIndex - 1)));
  quoteNextBtns.forEach((btn) => btn.addEventListener("click", () => showQuote(currentQuoteIndex + 1)));

  // Touch swipe support on quote card
  const quoteCard = document.querySelector(".quote-card");
  if (quoteCard) {
    let touchStartX = 0;
    let touchEndX = 0;
    quoteCard.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );
    quoteCard.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
          showQuote(currentQuoteIndex + 1);
        } else if (touchEndX - touchStartX > 50) {
          showQuote(currentQuoteIndex - 1);
        }
      },
      { passive: true }
    );
  }

  /* ==========================================================================
     7. CONTACT MODAL & SUBMISSION
     ========================================================================== */
  const contactModal = document.getElementById("contactModal");
  const contactModalClose = document.getElementById("contactModalClose");
  const contactBtns = document.querySelectorAll("[data-open-contact-modal]");
  const contactForm = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");
  const contactNameInput = document.getElementById("contactName");
  const contactPhoneInput = document.getElementById("contactPhone");

  const openContactModal = (e) => {
    if (e) e.preventDefault();
    if (!contactModal) return;
    contactModal.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      if (contactNameInput) contactNameInput.focus();
    }, 150);
  };

  const closeContactModal = () => {
    if (!contactModal) return;
    contactModal.classList.remove("open");
    document.body.style.overflow = "";
  };

  contactBtns.forEach((btn) => btn.addEventListener("click", openContactModal));
  if (contactModalClose) contactModalClose.addEventListener("click", closeContactModal);
  if (contactModal) {
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) closeContactModal();
    });
  }

  // Format phone number lightly as user types
  if (contactPhoneInput) {
    contactPhoneInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/[^\d+ -]/g, "");
      e.target.value = val;
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";

      const name = document.getElementById("contactName") ? document.getElementById("contactName").value.trim() : "";
      const email = document.getElementById("contactEmail") ? document.getElementById("contactEmail").value.trim() : "";
      const phone = document.getElementById("contactPhone") ? document.getElementById("contactPhone").value.trim() : "";
      const message = document.getElementById("contactMessage") ? document.getElementById("contactMessage").value.trim() : "";

      const subject = `[VQube Project Inquiry] ${name || 'Prospective Client'}`;
      const emailBody = `==================================================\n  VQUBE TECHNOLOGIES - NEW PROJECT INQUIRY\n==================================================\n\nCONTACT DETAILS:\n• Full Name:        ${name}\n• Company Email:    ${email}\n• Phone / WhatsApp: ${phone || 'Not provided'}\n\nPROJECT SPECIFICATIONS & REQUIREMENTS:\n${message}\n\n--------------------------------------------------\nSubmitted via VQube Technologies Modal Desk\nDirect Webmail: infovqubetechnologies@gmail.com`;

      const mailtoUrl = `mailto:infovqubetechnologies@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=infovqubetechnologies@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      const directGmailBtn = document.getElementById("directGmailBtn");
      if (directGmailBtn) {
        directGmailBtn.href = gmailUrl;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";
        submitBtn.innerHTML = `<span>Transmitting to Advisory Desk...</span>`;
      }

      const payload = {
        _subject: subject,
        name: name,
        email: email,
        phone: phone,
        project_details: message,
        _template: "table",
        _captcha: "false"
      };

      const finalizeModalSuccess = () => {
        contactForm.reset();
        contactForm.style.display = "none";
        if (formSuccess) {
          formSuccess.style.display = "block";
          setTimeout(() => {
            formSuccess.style.display = "none";
            contactForm.style.display = "flex";
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.style.opacity = "1";
              submitBtn.innerHTML = originalBtnHtml;
            }
            closeContactModal();
          }, 3600);
        }
        setTimeout(() => {
          try {
            window.location.href = mailtoUrl;
          } catch(e) {}
        }, 250);
      };

      fetch("https://formsubmit.co/ajax/infovqubetechnologies@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        finalizeModalSuccess();
      })
      .catch(err => {
        finalizeModalSuccess();
      });
    });
  }

  /* ==========================================================================
     8. LEGAL & PRIVACY MODAL
     ========================================================================== */
  const legalModal = document.getElementById("legalModal");
  const legalModalBackdrop = document.getElementById("legalModalBackdrop");
  const legalModalClose = document.getElementById("legalModalClose");
  const legalModalBody = document.getElementById("legalModalBody");
  const legalBtns = document.querySelectorAll("[data-open-legal]");

  const LEGAL_CONTENT = {
    privacy: {
      title: "Privacy Statement",
      content: `
        <p><strong>Driessen Architectuur B.V.</strong> respects the privacy of all clients, site visitors, and project partners. Personal data processed via our contact channels is treated in strict accordance with the General Data Protection Regulation (AVG / GDPR).</p>
        <p>We collect solely the information provided voluntarily through project inquiry forms (such as name, email address, phone number, and architectural project specifications) to evaluate architectural feasibility and maintain personal consultation correspondence.</p>
        <p>Your details are never sold, rented, or distributed to third parties. For inquiries regarding data removal or inspection, contact us at <a href="mailto:info@driessenarchitectuur.nl" style="color:var(--color-sage-dark); font-weight:600;">info@driessenarchitectuur.nl</a>.</p>
      `
    },
    terms: {
      title: "Terms and Conditions",
      content: `
        <p>All professional design agreements, feasibility studies, and realization contracts established by Driessen Architectuur are conducted under the standard rules of the <strong>Branchevereniging Nederlandse Architectenbureaus (BNA)</strong> and the <em>De Nieuwe Regeling (DNR)</em>.</p>
        <p>Architectural blueprints, models, renders, photography, and concept designs created by Driessen Architectuur remain intellectual property protected under Dutch and European copyright laws.</p>
        <p>For custom contractual documentation or specific institutional development frameworks, please consult our Venray studio directly.</p>
      `
    },
    cookies: {
      title: "Cookie Policy",
      content: `
        <p>Our website utilizes strictly necessary technical cookies and privacy-friendly analytics to deliver high-performance video streaming and smooth navigational transitions.</p>
        <p>We do not store invasive third-party tracking or advertising profiles. You may modify or purge local session cookies through your browser preferences at any time.</p>
      `
    }
  };

  const openLegalModal = (type) => {
    const data = LEGAL_CONTENT[type] || LEGAL_CONTENT["privacy"];
    if (!legalModal || !legalModalBody) return;
    legalModalBody.innerHTML = `
      <h3 class="legal-modal-title">${data.title}</h3>
      <div class="legal-modal-text">${data.content}</div>
    `;
    legalModal.classList.add("open");
    document.body.style.overflow = "hidden";
    if (legalModalClose) legalModalClose.focus();
  };

  const closeLegalModal = () => {
    if (!legalModal) return;
    legalModal.classList.remove("open");
    document.body.style.overflow = "";
  };

  legalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-open-legal");
      openLegalModal(type);
    });
  });

  if (legalModalClose) legalModalClose.addEventListener("click", closeLegalModal);
  if (legalModalBackdrop) legalModalBackdrop.addEventListener("click", closeLegalModal);

  /* ==========================================================================
     9. GLOBAL KEYBOARD ACCESSIBILITY & MODAL TRAPPING
     ========================================================================== */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
      closeVideoModal();
      closeContactModal();
      closeCaseStudy();
      closeLegalModal();
      if (typeof closeQrModal === 'function') closeQrModal();
    }

    // Video modal shortcuts when video lightbox is active
    if (videoModal && videoModal.classList.contains("open") && modalVideoPlayer) {
      if (e.key === " " || e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (modalVideoPlayer.paused) modalVideoPlayer.play();
        else modalVideoPlayer.pause();
        updatePlayPauseIcon();
      } else if (e.key.toLowerCase() === "m") {
        e.preventDefault();
        modalVideoPlayer.muted = !modalVideoPlayer.muted;
        updateMuteIcon();
      } else if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        if (videoFullscreenBtn) videoFullscreenBtn.click();
      }
    }
  });

  /* ==========================================================================
     10. SCROLL REVEAL (IntersectionObserver for staggered fade-in)
     ========================================================================== */
  document.body.classList.add("js-enabled");
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const checkImmediateReveals = () => {
    const triggerBottom = window.innerHeight * 0.95;
    revealElements.forEach((el) => {
      const box = el.getBoundingClientRect();
      if (box.top < triggerBottom) {
        el.classList.add("is-visible");
      }
    });
  };

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    revealElements.forEach((el, index) => {
      el.style.transitionDelay = `${(index % 3) * 0.1}s`;
      revealObserver.observe(el);
    });
  }

  // High-Performance Browser: IntersectionObserver handles off-screen reveal without scroll-event layout thrashing
  checkImmediateReveals();
  setTimeout(checkImmediateReveals, 300);

  /* Quick anchor jump if requested via query param */
  const urlParams = new URLSearchParams(window.location.search);
  const targetId = urlParams.get("goto");
  if (targetId) {
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "instant" });
      checkImmediateReveals();
      setTimeout(checkImmediateReveals, 100);
    }
  }

  /* ==========================================================================
     11. SPECIALISMS ITEM HOVER EFFECT (Offloaded to CSS compositor for 0ms INP)
     ========================================================================== */

  /* ==========================================================================
     12. CONTACT PAGE LOGIC (Pill selection, Form submit, QR Lightbox & FAQ)
     ========================================================================== */
  // QR Code Fullscreen / Lightbox Modal Expansion
  const qrLightboxModal = document.getElementById("qrLightboxModal");
  const qrLightboxBackdrop = document.getElementById("qrLightboxBackdrop");
  const qrLightboxClose = document.getElementById("qrLightboxClose");
  const qrBoxWrap = document.getElementById("qrBoxWrap");
  const tapToExpandBtn = document.getElementById("tapToExpandBtn");
  const copyPhoneBtn = document.getElementById("copyPhoneBtn");

  const openQrModal = (e) => {
    if (e) e.preventDefault();
    if (!qrLightboxModal) return;
    qrLightboxModal.classList.add("open");
    qrLightboxModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (qrLightboxClose) qrLightboxClose.focus();
  };

  const closeQrModal = () => {
    if (!qrLightboxModal) return;
    qrLightboxModal.classList.remove("open");
    qrLightboxModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  window.openQrModal = openQrModal;
  window.closeQrModal = closeQrModal;

  if (qrBoxWrap) {
    qrBoxWrap.addEventListener("click", openQrModal);
    qrBoxWrap.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        openQrModal(e);
      }
    });
  }
  if (tapToExpandBtn) {
    tapToExpandBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openQrModal(e);
    });
  }
  if (qrLightboxClose) qrLightboxClose.addEventListener("click", closeQrModal);
  if (qrLightboxBackdrop) qrLightboxBackdrop.addEventListener("click", closeQrModal);

  // Copy phone number button with visual feedback
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener("click", () => {
      const phoneText = "+91 76048 52835";
      navigator.clipboard.writeText(phoneText).then(() => {
        const originalText = copyPhoneBtn.innerHTML;
        copyPhoneBtn.innerHTML = `<span>✓ Copied +91 76048 52835</span>`;
        copyPhoneBtn.style.background = "#D1FAE5";
        copyPhoneBtn.style.color = "#065F46";
        setTimeout(() => {
          copyPhoneBtn.innerHTML = originalText;
          copyPhoneBtn.style.background = "";
          copyPhoneBtn.style.color = "";
        }, 2200);
      }).catch(() => {
        copyPhoneBtn.textContent = "Copied +91 76048 52835";
      });
    });
  }

  // Project type pill selection
  const typeBtns = document.querySelectorAll(".contact-type-btn");
  const hiddenTypeInput = document.getElementById("selectedProjectType");
  typeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      typeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (hiddenTypeInput) {
        hiddenTypeInput.value = btn.getAttribute("data-type") || btn.textContent.trim();
      }
    });
  });

  // Contact Page Form Submission (Fully Functional)
  const pageContactForm = document.getElementById("pageContactForm");
  const pageFormSuccess = document.getElementById("pageFormSuccess");
  const sendAnotherMsgBtn = document.getElementById("sendAnotherMsgBtn");

  if (pageContactForm) {
    pageContactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const submitBtn = pageContactForm.querySelector("button[type='submit']");
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";

      const name = document.getElementById("contactPageName") ? document.getElementById("contactPageName").value.trim() : "";
      const email = document.getElementById("contactPageEmail") ? document.getElementById("contactPageEmail").value.trim() : "";
      const phone = document.getElementById("contactPagePhone") ? document.getElementById("contactPagePhone").value.trim() : "";
      const sectorSelect = document.getElementById("contactPageSector");
      const sector = sectorSelect ? (sectorSelect.value || "General Advisory") : "General Advisory";
      const message = document.getElementById("contactPageMessage") ? document.getElementById("contactPageMessage").value.trim() : "";

      const subject = `[VQube Project Inquiry] ${name} - ${sector}`;
      const emailBody = `==================================================\n  VQUBE TECHNOLOGIES - NEW PROJECT INQUIRY\n==================================================\n\nCONTACT DETAILS:\n• Full Name:        ${name}\n• Company Email:    ${email}\n• Phone / WhatsApp: ${phone}\n• Industry Sector:  ${sector}\n\nPROJECT SPECIFICATIONS & REQUIREMENTS:\n${message}\n\n--------------------------------------------------\nSubmitted via VQube Technologies Contact Portal\nDirect Advisory Desk: infovqubetechnologies@gmail.com`;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.75";
        submitBtn.innerHTML = `<span>Transmitting Message to Advisory Desk...</span>`;
      }

      const payload = {
        _subject: subject,
        name: name,
        email: email,
        phone: phone,
        industry_sector: sector,
        project_details: message,
        _template: "table",
        _captcha: "false"
      };

      const mailtoUrl = `mailto:infovqubetechnologies@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=infovqubetechnologies@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      const directGmailBtn = document.getElementById("directGmailBtn");
      if (directGmailBtn) {
        directGmailBtn.href = gmailUrl;
      }

      const finalizeSuccess = () => {
        pageContactForm.reset();
        pageContactForm.style.display = "none";
        if (pageFormSuccess) {
          pageFormSuccess.style.display = "block";
          pageFormSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = "1";
          submitBtn.innerHTML = originalBtnHtml;
        }
        // Launch user mail client with pre-filled structured email
        setTimeout(() => {
          try {
            window.location.href = mailtoUrl;
          } catch(e) {}
        }, 250);
      };

      // Real email dispatch directly to infovqubetechnologies@gmail.com
      fetch("https://formsubmit.co/ajax/infovqubetechnologies@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        finalizeSuccess();
      })
      .catch(err => {
        finalizeSuccess();
      });
    });
  }

  if (sendAnotherMsgBtn) {
    sendAnotherMsgBtn.addEventListener("click", () => {
      if (pageFormSuccess) pageFormSuccess.style.display = "none";
      if (pageContactForm) {
        pageContactForm.style.display = "block";
        pageContactForm.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // FAQ Accordion Interaction
  const faqCards = document.querySelectorAll(".faq-card");
  faqCards.forEach((card) => {
    const questionBtn = card.querySelector(".faq-question-btn");
    const answerWrap = card.querySelector(".faq-answer-wrap");
    if (questionBtn && answerWrap) {
      questionBtn.addEventListener("click", () => {
        const isOpen = card.classList.contains("open");
        faqCards.forEach((other) => {
          if (other !== card && other.classList.contains("open")) {
            other.classList.remove("open");
            const otherWrap = other.querySelector(".faq-answer-wrap");
            if (otherWrap) otherWrap.style.maxHeight = null;
          }
        });
        if (isOpen) {
          card.classList.remove("open");
          answerWrap.style.maxHeight = null;
        } else {
          card.classList.add("open");
          answerWrap.style.maxHeight = answerWrap.scrollHeight + "px";
        }
      });
    }
  });

  /* ==========================================================================
     15. SERVICE WORKER REGISTRATION (High-Performance Caching & Offline)
     ========================================================================== */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      const swPath = window.location.pathname.includes('/pages/') ? '../sw.js' : './sw.js';
      navigator.serviceWorker.register(swPath).catch(() => {});
    });
  }
});

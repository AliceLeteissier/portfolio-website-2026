/* =============================================
   ALICE PORTFOLIO — main.js
   ============================================= */

// ---------- SCROLL REVEAL (IntersectionObserver) ----------
const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.15 },
);

projects.forEach((project) => observer.observe(project));

// ---------- ACTIVE NAV HIGHLIGHT ----------
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".nav-label");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.dataset.section === id ||
              (id === "creative" && link.dataset.section === "work"),
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -40% 0px" },
);

const hero = document.getElementById("hero");

const sidebarObserver = new IntersectionObserver(
  ([entry]) => {
    document
      .querySelector(".sidebar")
      .classList.toggle("sidebar-dark", !entry.isIntersecting);
  },
  { threshold: 0.1 },
);

sidebarObserver.observe(hero);

sections.forEach((section) => navObserver.observe(section));

// ---------- CURSOR SUBTLE EFFECT ----------
// Adds a gentle green glow that follows the cursor over project images
const imageContainers = document.querySelectorAll(".project-image");

imageContainers.forEach((container) => {
  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    container.style.setProperty("--mouse-x", `${x}%`);
    container.style.setProperty("--mouse-y", `${y}%`);
  });
});

// ---------- SMOOTH SCROLL FOR SIDEBAR NAV ----------
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ---------- TYPEWRITER ON HEADLINE ----------
const typeTarget = document.querySelector(".hero-text h1 em");
const fullText = typeTarget.textContent;
typeTarget.textContent = "";

setTimeout(() => {
  let i = 0;
  const type = () => {
    if (i < fullText.length) {
      typeTarget.textContent += fullText[i];
      i++;
      setTimeout(type, 55);
    }
  };
  type();
}, 800);

// ---------- BIO REVEAL + SCROLL LOCK ----------
const heroBio = document.querySelector(".hero-bio");
let bioRevealed = false;

// Lock scroll on load
document.body.style.overflow = "hidden";

window.addEventListener("wheel", () => {
  if (!bioRevealed) {
    bioRevealed = true;
    heroBio.classList.add("visible");

    // Unlock scroll after bio animation finishes
    setTimeout(() => {
      document.body.style.overflow = "";
    }, 900);
  }
});

// ---------- HAMBURGER MENU ----------
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

// Close menu when a link is clicked
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
  });
});

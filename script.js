const slides = Array.from(document.querySelectorAll(".slide"));
const dotNav = document.querySelector(".dot-nav");
const progressBar = document.querySelector(".progress-bar");
const counter = document.querySelector(".slide-counter");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const fullscreenButton = document.querySelector(".fullscreen-button");
const notesToggle = document.querySelector(".notes-toggle");
const notesPanel = document.querySelector(".notes-panel");
const notesTitle = document.querySelector(".notes-title");
const notesBody = document.querySelector(".notes-body");
const closeNotes = document.querySelector(".close-notes");

let activeIndex = 0;

function buildDots() {
  slides.forEach((slide, index) => {
    const dot = document.createElement("a");
    dot.href = `#${slide.id}`;
    dot.setAttribute("aria-label", `Go to slide ${index + 1}: ${slide.dataset.title}`);
    dotNav.appendChild(dot);
  });
}

function scrollToSlide(index) {
  const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
  slides[safeIndex].scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateActiveSlide(index) {
  activeIndex = Math.max(0, Math.min(index, slides.length - 1));
  const activeSlide = slides[activeIndex];
  const dots = Array.from(dotNav.querySelectorAll("a"));

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-current", slideIndex === activeIndex);
    slide.classList.toggle("is-visible", slideIndex <= activeIndex + 1);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeIndex);
  });

  const progress = slides.length === 1 ? 1 : activeIndex / (slides.length - 1);
  progressBar.style.width = `${progress * 100}%`;
  counter.textContent = `${activeIndex + 1} / ${slides.length}`;
  prevButton.disabled = activeIndex === 0;
  nextButton.disabled = activeIndex === slides.length - 1;
  updateNotes(activeSlide);
}

function updateNotes(slide) {
  const note = slide.querySelector(".speaker-note");
  notesTitle.textContent = slide.dataset.title || `Slide ${activeIndex + 1}`;
  notesBody.textContent = note ? note.textContent.trim().replace(/\s+/g, " ") : "";
}

function toggleNotes(forceOpen) {
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !notesPanel.classList.contains("is-open");
  notesPanel.classList.toggle("is-open", shouldOpen);
  notesPanel.setAttribute("aria-hidden", String(!shouldOpen));
  notesToggle.setAttribute("aria-expanded", String(shouldOpen));
}

function setCurrentFromScroll() {
  const midpoint = window.scrollY + window.innerHeight * 0.5;
  const nextIndex = slides.findIndex((slide, index) => {
    const nextSlide = slides[index + 1];
    return midpoint >= slide.offsetTop && (!nextSlide || midpoint < nextSlide.offsetTop);
  });
  updateActiveSlide(nextIndex === -1 ? 0 : nextIndex);
}

buildDots();
updateActiveSlide(0);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = slides.indexOf(entry.target);
        updateActiveSlide(index);
      }
    });
  },
  { threshold: 0.55 },
);

slides.forEach((slide) => observer.observe(slide));

prevButton.addEventListener("click", () => scrollToSlide(activeIndex - 1));
nextButton.addEventListener("click", () => scrollToSlide(activeIndex + 1));
notesToggle.addEventListener("click", () => toggleNotes());
closeNotes.addEventListener("click", () => toggleNotes(false));

fullscreenButton.addEventListener("click", async () => {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen();
    return;
  }
  await document.exitFullscreen();
});

window.addEventListener("scroll", () => {
  window.requestAnimationFrame(setCurrentFromScroll);
});

window.addEventListener("keydown", (event) => {
  const tagName = document.activeElement?.tagName;
  if (tagName === "INPUT" || tagName === "TEXTAREA") return;

  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    scrollToSlide(activeIndex + 1);
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    scrollToSlide(activeIndex - 1);
  }

  if (event.key === "Home") {
    event.preventDefault();
    scrollToSlide(0);
  }

  if (event.key === "End") {
    event.preventDefault();
    scrollToSlide(slides.length - 1);
  }

  if (event.key.toLowerCase() === "n") {
    toggleNotes();
  }

  if (event.key === "Escape") {
    toggleNotes(false);
  }
});

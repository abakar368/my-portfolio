// script.js

document.addEventListener("DOMContentLoaded", () => {
  const projectsLink = document.getElementById("projects-link");

  if (projectsLink) {
    let isAnimating = false;

    projectsLink.addEventListener("click", (e) => {
      e.preventDefault();

      if (isAnimating) return; // prevent double-clicks
      isAnimating = true;

      const target = projectsLink.dataset.href;

      // Save the original text
      const text = projectsLink.textContent.trim();
      projectsLink.textContent = "";

      // Split text into spans for animation
      [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.classList.add("tetris-piece");
        span.style.animationDelay = `${i * 0.1}s`;
        projectsLink.appendChild(span);
      });

      // Redirect after animation ends
      setTimeout(() => {
        window.location.href = target;
      }, 2000); // a bit longer than animation duration
    });
  }
});

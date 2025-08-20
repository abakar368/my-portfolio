// script.js

document.addEventListener("DOMContentLoaded", () => {
  const animatedLinks = document.querySelectorAll("[data-href]");

  animatedLinks.forEach((link) => {
    let isAnimating = false;

    link.addEventListener("click", (e) => {
      e.preventDefault();

      if (isAnimating) return; // prevent double-clicks
      isAnimating = true;

      const target = link.dataset.href;

      // Save the original text
      const text = link.textContent.trim();
      link.textContent = "";

      // Split text into spans for animation
      [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.classList.add("tetris-piece");
        span.style.animationDelay = `${i * 0.1}s`;
        link.appendChild(span);
      });

      // Redirect after animation ends
      setTimeout(() => {
        window.location.href = target;
      }, 2000); // match with CSS animation timing
    });
  });
});

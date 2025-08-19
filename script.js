// Simple starfield animation
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = Array.from({ length: 150 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 2,
  speed: 0.2 + Math.random()
}));

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// Sprite movement
const sprite = document.getElementById("sprite");
let posX = window.innerWidth / 2;
let speed = 10;

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") posX -= speed;
  if (e.key === "ArrowRight") posX += speed;
  sprite.style.left = posX + "px";
});

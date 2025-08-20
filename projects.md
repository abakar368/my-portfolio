---
layout: default
title: Projects
permalink: /projects/
---

# 📂 Projects

<div class="project-category" onclick="toggleCategory('cad')">
  ▶️ CAD Design Portfolio
</div>
<ul id="cad" style="display:none; margin-left:20px;">
  <li><a href="#">3D Mechanical Arm</a></li>
  <li><a href="#">Gearbox Assembly</a></li>
</ul>

<div class="project-category" onclick="toggleCategory('cv')">
  ▶️ Computer Vision Models
</div>
<ul id="cv" style="display:none; margin-left:20px;">
  <li><a href="#">Image Classifier</a></li>
  <li><a href="#">Object Detection Model</a></li>
</ul>

<div class="project-category" onclick="toggleCategory('rl')">
  ▶️ Reinforcement Learning Experiments
</div>
<ul id="rl" style="display:none; margin-left:20px;">
  <li><a href="#">CartPole Agent</a></li>
  <li><a href="#">Robotics Environment</a></li>
</ul>

<script>
function toggleCategory(id) {
  const section = document.getElementById(id);
  section.style.display = (section.style.display === "none") ? "block" : "none";
}
</script>

<style>
.project-category {
  cursor: pointer;
  color: #ffcc00;
  margin: 10px 0;
}
.project-category:hover {
  text-decoration: underline;
}
</style>

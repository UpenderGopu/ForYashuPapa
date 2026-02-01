document.addEventListener("DOMContentLoaded", () => {
 const overlay = document.getElementById("tapOverlay");
 const music = document.getElementById("music");
 const noBtn = document.getElementById("noBtn");
 const yesBtn = document.getElementById("yesBtn");
 let scale = 1;
 /* 🔓 Unlock audio on first tap (iOS FIX) */
 overlay.addEventListener("click", () => {
   music.play().then(() => {
     music.pause();
     music.currentTime = 0;
     overlay.style.display = "none";
   }).catch(() => {
     overlay.style.display = "none";
   });
 });
 /* No button逃げる 😈 */
 noBtn.addEventListener("mouseover", dodge);
 noBtn.addEventListener("touchstart", dodge);
 function dodge() {
   scale -= 0.05;
   if (scale < 0.4) scale = 0.4;
   const x = Math.random() * 240 - 120;
   const y = Math.random() * 120 - 60;
   noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
 }
 /* YES clicked 💖 */
 yesBtn.addEventListener("click", () => {
   document.getElementById("card").style.display = "none";
   document.getElementById("celebration").classList.remove("hidden");
   music.play();
   confetti({ particleCount: 250, spread: 120, origin: { y: 0.6 } });
   setTimeout(() => confetti({ particleCount: 150, spread: 160 }), 800);
   startHearts();
 });
 /* Floating hearts ❤️ */
 function startHearts() {
   setInterval(() => {
     const heart = document.createElement("div");
     heart.className = "heart";
     heart.innerText = "❤️";
     heart.style.left = Math.random() * 100 + "vw";
     heart.style.fontSize = Math.random() * 20 + 15 + "px";
     document.body.appendChild(heart);
     setTimeout(() => heart.remove(), 6000);
   }, 300);
 }
});
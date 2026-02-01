const noBtn = document.getElementById("noBtn");
const music = document.getElementById("music");
let scale = 1;
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
function sayYes() {
 document.getElementById("card").style.display = "none";
 document.getElementById("celebration").classList.remove("hidden");
 music.play();
 confetti({ particleCount: 250, spread: 120, origin: { y: 0.6 } });
 setTimeout(() => confetti({ particleCount: 150, spread: 160 }), 800);
 startHearts();
 startCountdown();
 setTimeout(() => {
   document.getElementById("secret").classList.remove("hidden");
 }, 4000);
}
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
/* Valentine countdown ⏳ */
function startCountdown() {
 const timer = document.getElementById("timer");
 const valentinesDay = new Date("Feb 14, 2026 00:00:00").getTime();
 setInterval(() => {
   const now = new Date().getTime();
   const diff = valentinesDay - now;
   if (diff <= 0) {
     timer.innerText = "Today ❤️";
     return;
   }
   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
   const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
   timer.innerText = `${days} days ${hours} hrs`;
 }, 1000);
}
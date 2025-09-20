// Array of shapes and names
const items = ["🌸", "🌺", "💐", "Peter"]; // flowers + your name

for (let i = 0; i < 60; i++) {
  const element = document.createElement('div');
  element.classList.add('confetti');
  element.textContent = items[Math.floor(Math.random() * items.length)];
  
  element.style.left = Math.random() * window.innerWidth + 'px';
  element.style.fontSize = (20 + Math.random() * 35) + 'px';
  element.style.animationDuration = (4 + Math.random() * 4) + 's';
  element.style.opacity = Math.random() * 0.8 + 0.2;
  
  document.body.appendChild(element);
}

// Autoplay music with fallback
window.addEventListener('load', () => {
  const music = document.getElementById('music');
  music.play().catch(() => {
    console.log("Autoplay blocked; user interaction required");

    const playBtn = document.createElement('button');
    playBtn.textContent = "Play Music";
    playBtn.style.position = "absolute";
    playBtn.style.top = "10px";
    playBtn.style.right = "10px";
    playBtn.style.padding = "10px 20px";
    playBtn.style.fontSize = "16px";
    playBtn.style.cursor = "pointer";
    playBtn.style.background = "#ff69b4";
    playBtn.style.color = "#fff";
    playBtn.style.border = "none";
    playBtn.style.borderRadius = "8px";
    document.body.appendChild(playBtn);

    playBtn.addEventListener('click', () => {
      music.play();
      playBtn.remove();
    });
  });
});

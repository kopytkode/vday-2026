function getNextValentines() {
  const now = new Date();
  let year = now.getFullYear();
  let valentines = new Date(year, 1, 14);
  if (now > valentines) valentines = new Date(year + 1, 1, 14);
  return valentines;
}

const valentinesDate = getNextValentines();
const secret = document.getElementById("secret");
const music = document.getElementById("music");

function updateCountdown() {
  const now = new Date();
  const diff = valentinesDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (diff <= 0) {
    secret.classList.remove("hidden");
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Valentine button
document.getElementById("valentineBtn").addEventListener("click", () => {
  document.getElementById("answer").classList.remove("hidden");
  music.play();
});

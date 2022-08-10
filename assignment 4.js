const clockTitle = document.querySelector(".js-clock");
const date = new Date();
const christmas = new Date(`December 25, ${date.getFullYear()} 00:00:00`);
function diffDay() {
  const difference = christmas - date;
  const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(Math.floor(difference / (1000 * 60 * 60)) % 24).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor(difference / (1000 * 60)) % 24).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor(difference / 1000) % 24).padStart(2, "0");
  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
diffDay();
setInterval(diffDay, 1000);
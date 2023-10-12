// count down logic

//count down elements
const day = document.querySelector("#days");
const hour = document.querySelector("#hours");
const minute = document.querySelector("#minutes");
const second = document.querySelector("#seconds");

//competition date
const date = Math.abs((new Date(2023, 04, 6).getTime() / 1000).toFixed(0));

function displayTimeLeft() {
  const now = Math.abs((new Date().getTime() / 1000).toFixed(0));
  const diff = date - now;

  const days = Math.floor(diff / 86400);
  const hours = Math.floor(diff / 3600) % 24;
  const minutes = Math.floor(diff / 60) % 60;
  const seconds = diff % 60;

  day.textContent = days;
  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = seconds;
}
displayTimeLeft();
setInterval(() => {displayTimeLeft()}, 1000);

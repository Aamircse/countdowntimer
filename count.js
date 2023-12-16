const targetDate = new Date("2023-12-31 23:59:59"); // Replace with your desired date and time
const eventText = "New Year's Eve!"; // Replace with your event name

const countdown = () => {
  const now = new Date();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const minutes = Math.floor((distance % (1000 * 60)) / 1000);
  const seconds = Math.floor((distance % 1000) / 10);
  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById("event-name").textContent = eventText;
  }
};
const timerInterval = setInterval(countdown, 1000);
document.getElementById("event-name").textContent = eventText;
countdown();

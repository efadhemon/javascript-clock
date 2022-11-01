setInterval(setClock, 1000);

const hourWheel = document.querySelector(".wheel.hour");
const minuteWheel = document.querySelector(".wheel.minute");
const secondWheel = document.querySelector(".wheel.second");

const hourCount = document.querySelector(".count.hour");
const minuteCount = document.querySelector(".count.minute");
const secondCount = document.querySelector(".count.second");
const statusCount = document.querySelector(".count.status");

const dayArea = document.querySelector(".day");

function setClock() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hours = currentDate.getHours();
  const day = currentDate.getDay();

  const secondsRatio = seconds / 60;
  const minutesRatio = (secondsRatio + minutes) / 60;
  const hoursRatio = (minutesRatio + hours) / 12;
  setRotation(secondWheel, secondsRatio);
  setRotation(minuteWheel, minutesRatio);
  setRotation(hourWheel, hoursRatio);

  setCount(hourCount, Math.abs(hours === 12 ? 0 : hours - 12));
  setCount(minuteCount, currentDate.getMinutes());
  setCount(secondCount, currentDate.getSeconds());
  setCount(statusCount, hours < 12 ? "am" : "pm");

  setDay(dayArea, day);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
function setCount(element, time) {
  element.innerHTML = time;
}

function setDay(element, day) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  element.innerHTML = weekday[day];
}

setClock();

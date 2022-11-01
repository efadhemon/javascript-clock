const hourWheel = document.querySelector(".wheel.hour");
const minuteWheel = document.querySelector(".wheel.minute");
const secondWheel = document.querySelector(".wheel.second");

const hourCount = document.querySelector(".count.hour");
const minuteCount = document.querySelector(".count.minute");
const secondCount = document.querySelector(".count.second");
const statusCount = document.querySelector(".count.status");

const date = document.querySelector(".date");

const startClock = () => {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hours = currentDate.getHours();

  const secondsRatio = seconds / 60;
  const minutesRatio = (secondsRatio + minutes) / 60;
  const hoursRatio = (minutesRatio + hours) / 12;
  setRotation(secondWheel, secondsRatio);
  setRotation(minuteWheel, minutesRatio);
  setRotation(hourWheel, hoursRatio);

  setCount(hourCount, hours <= 12 ? (hours === 0 ? 12 : hours) : hours - 12);
  setCount(minuteCount, currentDate.getMinutes());
  setCount(secondCount, currentDate.getSeconds());
  setCount(statusCount, hours < 12 ? "am" : "pm");

  if (date.innerHTML !== currentDate.toDateString())
    date.innerHTML = currentDate.toDateString();
};

const setRotation = (element, ratio) => {
  element.style.setProperty("--rotation", ratio * 360);
};
const setCount = (element, time) => {
  time = time < 10 ? "0" + time : time;
  if (element.innerHTML !== time.toString()) element.innerHTML = time;
};

startClock();
setInterval(startClock, 1000);

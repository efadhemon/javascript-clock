setInterval(setClock, 1000);

const hourWheel = document.querySelector(".hour");
const minuteWheel = document.querySelector(".minute");
const secondWheel = document.querySelector(".second");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondWheel, secondsRatio);
  setRotation(minuteWheel, minutesRatio);
  setRotation(hourWheel, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();

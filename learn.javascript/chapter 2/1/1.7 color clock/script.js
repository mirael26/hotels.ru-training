// Цветные часы с использованием setInterval

const clock = document.querySelector('.clock');
const hoursElement = clock.querySelector('.clock__time--hours');
const minutesElement = clock.querySelector('.clock__time--minutes');
const secondsElement = clock.querySelector('.clock__time--seconds');

const updateTime = () => {
  const now = new Date();
  const hours = ('0' + now.getHours()).slice(-2);
  const minutes = ('0' + now.getMinutes()).slice(-2);
  const seconds = ('0' + now.getSeconds()).slice(-2);
  
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
}

let timerId;

const startClock = () => {
  timerId = setInterval(updateTime, 1000);
  updateTime();
}

const stopClock = () => {
  clearInterval(timerId);
}

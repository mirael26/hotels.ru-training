'use strict';

// Вывод каждую секунду

const printNumbers = (from, to) => {
  let i = from;

  const timerId = setInterval(() => {
    alert(i);

    if (i == to) {
      clearInterval(timerId);
    }
    i++;
  }, 1000);
};

const printNumbers = (from, to) => {
  let i = from;
  
  let timerId = setTimeout(function tick ()  {
    alert(i);
    if (i < to) {
      i++;
      timerId = setTimeout(tick, 1000);
    }
  }, 1000);
};
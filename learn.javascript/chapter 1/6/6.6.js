'use strict';

// Установка и уменьшение значения счётчика

const makeCounter = () => {
  let count = 0;

  function counter () {
    return count++;
  };

  counter.set = (value) => {
    count = value;
  }

  counter.decrease = () => {
    return count--;
  }

  return counter
}

// Сумма с произвольным количеством скобок

const sum = (a) => {
  let sum = a;

  function func(b) {
    sum += b;
    return func;
  }

  func.toString = () => {
    return sum
  };

  return func;
};

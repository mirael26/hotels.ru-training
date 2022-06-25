'use strict';

// Операции с массивами

const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles[Math.floor(styles.length / 2)] = "Классика";

alert(styles.push());

styles.unshift("Рэп", "Регги");

// Сумма введённых чисел

const sumInput = () => {
  let numbers = [];
  while (true) {
    const number = +prompt('Введите значение', '');
    if (number === "" || number === null || !isFinite(number)) {
      break;
    }
    numbers.push(+number);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return sum;
};

// Подмассив наибольшей суммы

arr = [1, -2, 3, 4, -9, 6];

const getMaxSubSum = (arr) => {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
};
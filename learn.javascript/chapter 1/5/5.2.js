'use strict';

// Сумма пользовательских чисел

const a = prompt('Первое число', '');
const b = prompt('Второе число', '');

if (a === null || b === null ||
  a === '' || b === '') {
  alert('Число не введено');
}

if (isNaN(a) || isNaN(b)) {
  alert('Число введено неверно');
} else {
  alert((+a + +b).toFixed(0))
};

// Ввод числового значения

const readNumber = () => {
  let number;
  do {
    number = prompt('Введите число', '')

    if (number === '' || number === null) {
      return null;
    }

  } while (!isFinite(number));
  return +number;
};

// Случайное число от min до max

const random = (min, max) => {
  return min + (max - min) * Math.random();
};

// Случайное целое число от min до max

const randomInteger = (min, max) => {
  return Math.floor(min + (max + 1 - min) * Math.random());
};
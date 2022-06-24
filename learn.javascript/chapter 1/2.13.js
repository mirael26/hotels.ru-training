'use strict';

// При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  alert(i);
}

// Замените for на while

let i = 0;
while (i < 3) {
  alert(`number ${i++}!`)
}

// Повторять цикл, пока ввод неверен

let i = 0;
while (i <= 100 && i !== null && i !== '') {
  i = prompt("Введите число больше 100", 0);
}

// Вывести простые числа

const MIN_NUMBER = 2
const n = 10;

for (let i = MIN_NUMBER; i <= n; i++) {
  let isNumberSimple = true;

  for (let j = 2; j < i; j++) {

    if (i % j === 0) {
      isNumberSimple = false;
    }

  }

  if (isNumberSimple) {
    alert(i);
  }
}
'use strict';

// Перепишите функцию, используя оператор '?' или '||'

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

// Функция min(a, b)

function min(a, b) {
  return (a > b) ? b : a;
}

// Функция pow(x,n)

function pow(x, n) {
  return x ** n;
}

const number = prompt('Введите число, возводимое в степень', '');
const exponent = prompt('Введите степень', '');

alert(pow(number, exponent));
'use strict';

// Название JavaScript

let answer = prompt("Какое «официальное» название JavaScript?");

if (answer === "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

// Покажите знак числа

let number = prompt("Введите число");

const result = (number > 0) ? 1 :
  (number < 0) ? -1 :
  0;

alert(result);

// Перепишите 'if' в '?'

let result = (a + b < 4) ? "Мало" : "Много";

// Перепишите 'if..else' в '?'

let message = (login == 'Сотрудник') ? 'Привет':
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';
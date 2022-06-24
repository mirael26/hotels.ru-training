'use strict';

// Проверка значения из диапазона

if (age >= 14 && age <= 90) {}

// Проверка значения вне диапазона

if (!(age >= 14 && age <= 90)) {}

if (age < 14 || age > 90) {}

// Проверка логина

let login = prompt("Кто там?", '');

if (login === "Админ") {
  
  let password = prompt("Пароль?", '');

  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === '' || password === 'null') {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (login === '' || login === 'null') {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
};
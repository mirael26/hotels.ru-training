'use strict';

// Сумма свойств объекта

const sumSalaries = (salaries) => {
  let sum = 0;

  const salariesArr = Object.values(salaries);
  for (salary of salariesArr) {
    sum += salary;
  }

  return sum;
};

// Подсчёт количества свойств объекта

const count = (obj) => {
  return Object.values(obj).length;
};
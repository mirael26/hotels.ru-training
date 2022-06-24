'use strict';

// Привет, object

const user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Проверка на пустоту

const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

// Сумма свойств объекта

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const calcSalarySum = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
};

alert(calcSalarySum(salaries));

// Умножаем все числовые свойства на 2

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
};
'use strict';

// Сумма с помощью замыканий

const sum = (a) => {
  return (b) => {
    return a + b;
  }
};

console.log(sum(4)(5))

// Фильтрация с помощью функции

const inBetween = (a, b) => {
  return (element) => {
    return (element >= a && element <= b);
  }
};

const inArray = (arr) => {
  return (element) => {
    return arr.includes(element);
  }
};

// Сортировать по полю

const byField = (field) => {
  return (a, b) => {
    return a[field] > b[field] ? 1 : -1;
  };
};

// Армия функций

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // функция shooter
      alert( j ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

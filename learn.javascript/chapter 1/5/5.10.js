'use strict';

// Деструктурирующее присваивание

let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;

// Максимальная зарплата

const topSalary = (salaries) => {
  let topSalary = 0;
  let topManager = null;

  Object.entries(salaries).forEach(([name, salary]) => {
    if (salary > topSalary) {
      topSalary = salary;
      topManager = name;
    }
  });

  return topManager;
};


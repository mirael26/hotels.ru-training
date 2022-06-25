'use strict';

// Переведите текст вида border-left-width в borderLeftWidth

const ucFirst = (str) => {
  return (str) ? str[0].toUpperCase() + str.slice(1, str.length) : str;
};

const camelize = (str) => {
  const strArray = str.split("-");

  let strCamelArray = strArray.map((word, i) => {
    return (i === 0) ? word : ucFirst(word);
  });

  return strCamelArray.join('');
};

// Фильтрация по диапазону

const filterRange = (arr, a, b) => {
  return arr.filter((el) => el >= a && el <= b);
};

// Фильтрация по диапазону "на месте"

const filterRangeInPlace = (arr, a, b) => {

  arr.forEach((el, i, array) => {
    if (el < a || el > b) {
      array.splice(i, 1);
    }
  });
};

// Сортировать в порядке по убыванию

arr.sort((a, b) => b - a);

// Скопировать и отсортировать массив

const copySorted = (arr) => {
  return arr.slice().sort();
};

// Создать расширяемый калькулятор

function Calculator () {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = (str) => {
    const arr = str.split(' ');
    const a = arr[0];
    const b = arr[2];
    const operator = arr[1];

    if (!this.methods.hasOwnProperty(operator)) {
      alert("оператор введен неверно");
      return;
    }
    if (isNaN(a) || isNaN(b)) {
      alert("число введено неверно");
      return
    }

    return this.methods[operator](+a, +b);
  }

  this.addMethod = (name, func) => {
    this.methods[name] = func;
  }
};

// Трансформировать в массив имён

let names = users.map((obj) => obj.name);

// Трансформировать в объекты

let usersMapped = users.map((user) => {
  return {
    fullName: user.name + " " + user.surname,
    id: user.id,
  };
});

// Отсортировать пользователей по возрасту

const sortByAge = (users) => {
  users.sort((user1, user2) => user1.age - user2.age);
};

// Перемешайте массив

const randomInteger = (min, max) => {
  return Math.floor(min + (max + 1 - min) * Math.random());
};

const shuffle = (array) => {
  const transformArray = array.slice();

  const newArray = [];

  while (transformArray.length > 0) {
    const randomIndex = randomInteger(0, transformArray.length - 1);
    newArray.push(transformArray[randomIndex]);
    transformArray.splice(randomIndex, 1);
  }
  return newArray;
};

// Получить средний возраст

const getAverageAge = (users) => {
  let ageSum = 0;
  users.forEach(user => ageSum += user.age);
  return ageSum / users.length;
};

// Оставить уникальные элементы массива

const unique = (arr) => {
  let result = [];
  arr.forEach((str) => {
    if (!result.includes(str)) {
      result.push(str);
    }
  });
  return result;
};
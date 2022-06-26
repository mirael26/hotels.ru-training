'use strict';

// Фильтрация уникальных элементов массива

const unique = (arr) => {
  return [...new Set(arr)];
};

// Отфильтруйте анаграммы

const aclean = (arr) => {
  let obj = {};

  arr.forEach(string => {
    const sortedString = string.toLowerCase().split('').sort().join('');
    obj[sortedString] = string;
  });

  return Object.values(obj);
};

// Перебираемые ключи

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

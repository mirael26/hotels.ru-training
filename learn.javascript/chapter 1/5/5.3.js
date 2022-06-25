'use strict';

// Сделать первый символ заглавным

const ucFirst = (str) => {
  return (str) ? str[0].toUpperCase() + str.slice(1, str.length) : str;
};

// Проверка на спам

const checkSpam = (str) => {
  return (str.toLowerCase.contains('viagra') || str.toLowerCase.contains('xxx'));
};

// Усечение строки

const truncate = (str, maxlength) => {
  return (str.length <= maxlength) ? str : (str.slice(0, (maxlength - 1)) + '…');
};

// Выделить число

const extractCurrencyValue = (str) => {
  if (str[0] === '$' || isFinite(str.slice(1))) {
    return +str.slice(1);
  }
  return str;
};
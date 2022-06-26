'use strict';

// Добавьте toString в словарь

const dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join(', ');
    }
  }
});
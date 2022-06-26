'use strict';

// Декоратор-шпион

function spy (func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
};

// Задерживающий декоратор

function delay (f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
};

let f1000 = delay(alert, 1000);

f1000("test"); // показывает "test" после 1000 мс

// Декоратор debounce

function debounce (f, ms) {
  let cd = false;

  return function () {
    if (cd) {
      return;
    }

    f.apply(this, arguments);
    cd = true;

    setTimeout(() => {
      cd = false;
    }, ms);
  }
};

// Тормозящий (throttling) декоратор

function throttle (f, ms) {
  let cd = false;
  let lastArgs = null;
  let lastThis = null;

  function wrapper () {
    if (cd) {
      lastArgs = arguments;
      lastThis = this;
      return;
    }

    f.apply(this, arguments);
    cd = true;

    setTimeout(function() {
      cd = false;
      if (lastArgs) {
        wrapper.apply(lastThis, lastArgs);
        lastArgs = null;
        lastThis = null;
      }
    }, ms);
  }

  return wrapper;
};
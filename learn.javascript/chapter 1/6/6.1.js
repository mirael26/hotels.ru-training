'use strict';

// Вычислить сумму чисел до данного

const sumTo = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

const sumTo = (n) => {
  if (n == 1) {
    return n;
  } else {
    return n + sumTo(n-1);
  }
};

const sumTo = (n) => {
  return n * (n + 1) / 2;
};

// Вычислить факториал

const factorial = (n) => {
  return n == 1 ? n : n * factorial(n - 1);
};

// Числа Фибоначчи

const fib = (n) => {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
}

// Вывод односвязного списка

const printList = (list) => {
  let a = list;

  while (true) {
    alert(a.value)

    if (!a.next) {
      break;
    }

    a = a.next;
  }
};

const printList = (list) => {
  alert(list.value);

  if(list.next) {
    printList(list.next);
  }
};

// Вывод односвязного списка в обратном порядке

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

const printListReverse = (list) => {
  let arr = [];
  
  let a = list;

  while (a) {
    arr.push(a.value);
    a = a.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
};

const printList = (list) => {
  if (list.next) {
    printList(list.next);
  }
  
  alert(list.value);
};
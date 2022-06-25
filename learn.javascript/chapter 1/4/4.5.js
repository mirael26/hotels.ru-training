'use strict';

// Две функции - один объект

let obj = {  
  name: 'John'
}

function A() {
  return obj;
}

function B() {
  return obj;
}

let a = new A;
let b = new B;

alert( a == b );

// Создание калькулятора при помощи конструктора

function Calculator() {
  this.read = function() {
    this.a = prompt('Первое значение', '');
    this.b = prompt('Второе значение', '');
  };
  this.sum = function() {
    return +this.a + +this.b; 
  };
  this.mul = function() {
    return this.a * this.b;
  };
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// Создаём Accumulator

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('Сколько прибавим?', 0)
  };
};
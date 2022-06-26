'use strict';

// Преобразуйте объект в JSON, а затем обратно в обычный объект

const parsedUser = JSON.parse(JSON.stringify(user));

// Исключить обратные ссылки

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));
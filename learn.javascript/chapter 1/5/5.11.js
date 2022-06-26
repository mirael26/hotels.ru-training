'use strict';

// Создайте дату

const date = new Date(2012, 1, 20, 3, 12);

alert(date);

// Покажите день недели

const getWeekDay = (date) => {
  const dayNumber = getDay(date);
  const DAYS =  ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return DAYS[dayNumber];
};

// День недели в европейской нумерации

const getLocalDay = (date) => {
  const day = date.getDay();

  return (day === 0) ? 7 : day;
};

// Какой день месяца был много дней назад?

const getDateAgo = (date, days) => {
  let newDate = new Date(date);

  newDate.setDate(date.getDate() - days);

  return newDate.getDate();
};

// Последнее число месяца?

const getLastDayOfMonth = (year, month) => {
  const date = new Date(year, month + 1, 0);

  return date.getDate();
};

// Сколько сегодня прошло секунд?

const getSecondsToday = () => {
  const now = Date.now();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return Math.round((now - today) / 1000);
};

// Сколько секунд осталось до завтра?

const getSecondsToTomorrow = () => {
  const now = Date.now();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), (now.getDate() + 1));

  return Math.round((tomorrow - now) / 1000);
};

// Форматирование относительной даты

const formatDate = (date) => {
  const passedTime = Date.now() - date;
  const passedSec = Math.floor(passedTime / 1000);
  const passedMin = Math.floor(passedSec / 60);

  if (passedTime < 1000) {
    return 'прямо сейчас';
  }
  if (passedSec < 60) {
    return `${passedSec} сек. назад`;
  }
  if (passedMin < 60) {
    return `${passedMin} мин. назад`;
  }

  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = ('0' + date.getFullYear()).slice(-2);
  const hour = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);

  return `${day}.${month}.${year} ${hour}:${minutes}`;
};

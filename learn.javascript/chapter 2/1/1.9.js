// Найти размер прокрутки снизу

const scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// Узнать ширину полосы прокрутки

const scrollBarWidth = div.offsetWidth - div.clientWidth;

// Поместите мяч в центр поля

ball.style.left = Math.round((field.clientWidth) / 2) - (ball.clientWidth / 2) + 'px';
ball.style.top = Math.round((field.clientHeight) / 2) - (ball.clientHeight / 2) + 'px';
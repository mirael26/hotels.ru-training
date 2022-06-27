// Считаем потомков

const items = document.querySelectorAll('li');

items.forEach(item => {
  let text = item.firstChild.data;
  let amount = item.querySelectorAll('li').length;

  alert(text);
  alert(amount);
});
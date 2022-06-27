// Получите атрибут

const element = document.querySelector('[data-widget-name]');

alert(element.getAttribute('data-widget-name'));

// Сделайте внешние ссылки оранжевыми

const links = document.querySelectorAll('a');

links.forEach(link => {
  const href = link.getAttribute('href');

  if (href.includes('http://internal.com')) {
    return;
  }

  if (href.includes('://')) {
    link.style.color = 'orange';
  }
});
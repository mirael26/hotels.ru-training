// Очистите элемент

const clear = (elem) => {
  elem.innerHTML = '';
};

// Создайте список

const createList = () => {
  const list = document.createElement('ul');
  while (true) {
    const itemText = prompt('Назовите пункт', '');

    if (itemText === '' || itemText === null) {
      break;
    }

    const item = document.createElement('li');
    item.textContent = itemText;
    list.append(item);
  }

  elem.insertAdjacentHTML(document.body, list);
};

// Создайте дерево из объекта

const createTree = (container, obj) => {
  const createDom = (obj) => {
    if (Object.keys(obj).length === 0) {
      return
    };

    const list = document.createElement('ul');

    obj.forEach(el => {
      const item = document.createElement('li');
      item.innerHTML = el;

      const childrenList = createDom(obj[el]);
      if (childrenList) {
        item.append(childrenList);
      }
      list.append(item);
    });

    return list;
  };

  container.append(createDom(obj));
};

// Выведите список потомков в дереве

const list = document.querySelectorAll('li');

list.forEach(item => {
  const childrenCount = item.querySelectorAll('li').length;
  if (childrenCount > 0) {
    item.firstChild.data += ` [${childrenCount}]`;
  }
});

// Создайте календарь в виде таблицы

const createCalendar = (elem, year, month) => {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0).getDate();
  const firstWeekDay = firstDay.getDay();
  const idfirstWeekDay = (firstWeekDay === 0) ? 6 : firstWeekDay - 1;

  const tableHeaders = '<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>';
  
  let currentDay = firstDay.getDate();

  let firstRow = '';
  for (let i = 0; i < 7; i++) {
    if (i < idfirstWeekDay) {
      firstRow += '<td></td>';
    } else {
      firstRow += `<td>${currentDay++}</td>`;
    }
  }

  let otherRowsArr = [];
  while (currentDay < lastDay) {
    let row = '';
    for (let i = 0; i < 7; i++) {
      if (currentDay <= lastDay) {
        row += `<td>${currentDay++}</td>`;
      } else {
        row += `<td></td>`;
      }
    }
    otherRowsArr.push(row);
  }

  const otherRows = otherRowsArr.map(row => `<tr>${row}</tr>`).join('');

  const table = `<table>
    ${tableHeaders}
    <tr>${firstRow}</tr>
    ${otherRows}
  </table>`;
  
  elem.innerHTML = table;
}

// Цветные часы с использованием setInterval


// см. папку 1.7 color clock


// Вставьте HTML в список

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// Сортировка таблицы

const table = document.querySelector('table');
const tBody = table.querySelector('tbody');
const rows = table.querySelectorAll('tr');

const sortedRows = Array.from(rows).slice(1).sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

console.log(tBody);
tBody.append(...sortedRows);
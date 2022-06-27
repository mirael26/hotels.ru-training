// Дочерние элементы в DOM

document.body.firstElementChild;
document.body.children[1];
document.body.children[1].children[1];

// Выделите ячейки по диагонали

const table = document.body.firstElementChild;
const rowLength = table.rows.length;

for (let i = 0; i <= rowLength; i++) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
}
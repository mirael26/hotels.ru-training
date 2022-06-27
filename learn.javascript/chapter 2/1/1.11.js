// Найдите координаты точек относительно окна браузера

const clientRect = field.getBoundingClientRect();
const coord1 = `${clientRect.left}, ${clientRect.top}`;
const coord2 = `${clientRect.right}, ${clientRect.bottom}`;
const coord3 = `${clientRect.left + field.clientLeft}, ${clientRect.top + field.clientTop}`;
const coord4 = `${clientRect.left + field.clientLeft + field.clientWidth}, ${clientRect.top + field.clientTop + field.clientHeight}`;

// Покажите заметку рядом с элементом

const positionAt = (anchor, position, elem) => {
  if (position === "top") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
  }

  if (position === "right") {
    elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
    elem.style.top = anchorCoords.top + "px";
  }

  if (position === "bottom") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
  }
};

// Покажите заметку около элемента (абсолютное позиционирование)

const getCoords = (elem) => {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

const positionAt = (anchor, position, elem) => {
  const anchorCoords = getCoords(anchor);

  if (position === "top") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
  }

  if (position === "right") {
    elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
    elem.style.top = anchorCoords.top + "px";
  }

  if (position === "bottom") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
  }
}

// Расположите заметку внутри элемента (абсолютное позиционирование)

const getCoords = (elem) => {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

const positionAt = (anchor, position, elem) => {
  const anchorCoords = getCoords(anchor);

  if (position === "top-out") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
  }

  if (position === "right-out") {
    elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
    elem.style.top = anchorCoords.top + "px";
  }

  if (position === "bottom-out") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
  }

  if (position === "top-in") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top + "px";
  }

  if (position === "right-in") {
    elem.style.width = '150px';
    elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
    elem.style.top = anchorCoords.top + "px";
  }

  if (position === "bottom-in") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
  }
};
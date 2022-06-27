// Создать уведомление

const  showNotification = ({top = 0, right = 0, className, html}) => {
  let notification = document.createElement('div');
  notification.className = `notification ${className ?? ''}`;

  notification.style.position = 'absolute';
  notification.style.top = top + 'px';
  notification.style.right = right + 'px';

  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
};
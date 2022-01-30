/*
7. Создать уведомление
 Напишите функцию showNotification(options), которая создаёт уведомление:
  <div class="notification"> с заданным содержимым. 
  Уведомление должно автоматически исчезнуть через 1,5 секунды.
 */
function showNotification(options = {top: 0, right: 0,html:'Hello'}){
    let div = document.createElement('div')
    div.className = 'notification'
    document.body.prepend(div)
    let hello = document.body.querySelector('.notification')
    hello.innerHTML = options['html'];
    hello.style.backgroundColor = 'red';
    hello.style.top = options['top'] + 'px';
    hello.style.right = options['right'] + 'px';
    hello.style.backgroundColor = 'red';
    setTimeout(() => hello.remove(), 1500);
}
let options = {
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от левого края окна (по умолчанию 0px)
    html: "Hi!", // HTML-уведомление
 };


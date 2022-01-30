/*
Задание No1. Дочерние элементы в DOM
Для страницы:
 <html> 
  <body>
   <div>Пользователи:</div> 
   <ul>
     <li>Джон</li>
     <li>Пит</li> 
   </ul>
  </body> 
 </html>
Как получить:
• Напишите код, который получит элемент <div>?                //document.body.firstElementChild                            document.body.querySelector('div')
• Напишите код, который получит <ul>?                        //document.body.firstElementChild.nextSibling.nextSibling     document.body.querySelector('ul')
• Напишите код, который получит второй <li> (с именем Пит)? //document.body.firstElementChild.nextSibling.nextSibling.lastElementChild   let li = document.body.querySelectorAll('li')
li[1]
*/
/*Задание No2. Выделите ячейки по диагонали
Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
// в переменной td находится DOM-элемент для тега <td> td.style.backgroundColor = 'red';
*/
let table = document.body.firstElementChild.nextSibling.nextSibling.nextElementSibling;
for(let i = 0;i < table.rows.length;i++){
   for(let j = 0;j< table.rows[i].cells.length;j++){
      table.rows[i].cells[j].innerText = (j+1) + ":" + (i+1)
      table.rows[i].cells[i].style.backgroundColor = 'red'
      }
}
/*
Задание No3. Поиск элементов
Вот документ с таблицей и формой. Как найти?...
• Таблицу с id="age-table".                        //document.getElementById('age-table');
• Все элементы label внутри этой таблицы (их три). //document.querySelectorAll('#age-list label');
• Первый td в этой таблице (со словом «Age»).      //document.querySelector('#age-table td');
• Форму form с именем name="search".               //document.body.firstElementChild;
• Первый input в этой форме.                       //document.body.querySelector('form input');
• Последний input в этой форме.                    //document.body.querySelector('form > input');
Используйте код файла table.html и браузерные инструменты разработчика:
<html>
<body>
  <form name="search">
    <label>Search the site:
      <input type="text" name="search">
    </label>
    <input type="submit" value="Search!">
</form>
<hr>
  <form name="search-person">
    Search the visitors:
    <table id="age-table">
      <tr>
        <td>Age:</td>
        <td id="age-list">
          <label>
            <input type="radio" name="age" value="young">less than
18</label>
          <label>
            <input type="radio" name="age" value="mature">18-50</label>
          <label>
            <input type="radio" name="age" value="senior">more than
50</label>
        </td>
</tr>
      <tr>
        <td>Additionally:</td>
        <td>
          <input type="text" name="info[0]">
          <input type="text" name="info[1]">
          <input type="text" name="info[2]">
</td> </tr>
</table>
<input type="submit" value="Search!">
  </form>
</body>
</html>
*/
/*
Задание No4. Очистите элемент
Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

<ol id="elem">
  <li>Привет</li>
  <li>Мир</li>
</ol>
*/

  function clear(elem) {
            let elemArr = document.body.querySelectorAll(elem) //передаем силектор 
            for (let i = 0; i < elemArr.length; i++ ){
                elemArr[i].innerText = ''
            }
         }
    clear('#elem li'); // очищает список
/*
Задание No5. Создайте список
Напишите интерфейс для создания списка. Для каждого пункта:
1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
2. Создавайте элемент <li> и добавляйте его к <ul>.
3. Процесс прерывается,когдапользователь нажимает Esc или вводит пустую
строку.
Все элементы должны создаваться динамически.
Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.
*/
function getShoppingList(){
   let pass = document.body.querySelector('ul')
   let note 
   while (true) {
      note = prompt('Что записать?')
      if (note != null && note != ''){
      pass.insertAdjacentHTML('beforebegin',`<li>${note}`)
      }
      else break
   }
}
/*
Задание No6. Вставьте HTML в список
Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>
*/
document.body.querySelector('#one').insertAdjacentHTML('afterend','<li >2</li>')
document.body.querySelector('#two').insertAdjacentHTML('beforebegin','<li>3</li>');

   
   



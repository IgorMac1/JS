<script>
    // Задание No1. Последнее значение цикла
    // Какое последнее значение выведет этот код? Почему?
    let i = 3;
    while (i) {
        alert(i--);
    }
    //Цикл выведет 1 и остановится т.к. при следующей итерации i будет равняться 0 и условие True не будет выполнено
    //если укакзать префиксный инкремент --i,то последним выведется 0

    /*Задание No2.
      Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по возрастанию, то удвоить их; в
      противном случае заменить значение каждой переменной на противоположное. Вывести новые значения переменных A, B, C.
     */
    let a = 7;
    let b = 6;
    let c = 5;
    if (b > a && c > b) {
        a *= 2;
        b *= 2;
        c *= 2;
    } else {
        a *= -1;
        b *= -1;
        c *= -1;
    }
    console.log(a, b, c);
    /*Задание No3.
    Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по возрастанию или убыванию, то удвоить
    их; в противном случае заменить значение каждой переменной на противоположное. Вывести новые значения переменных A, B, C.
    */
    let a = 7;
    let b = 6;
    let c = 5;
    if (b > a && c > b) {
        a *= 2;
        b *= 2;
        c *= 2;
    } else if (a > b && b > c) {
        a *= 2;
        b *= 2;
        c *= 2;
    } else {
        a *= -1;
        b *= -1;
        c *= -1;
    }
    console.log(a, b, c);
    /*Задание No4.
    На числовой оси расположены три точки: A, B, C. Определить, какая из двух последних
    точек (B или C) расположена ближе к A, и вывести эту точку и ее расстояние от точки A.
    */
    let a = +prompt('Введите координаты точки А');
    let b = +prompt('Введите координаты точки B');
    let c = +prompt('Введите координаты точки C');
    let lenBtoA;
    let lenCtoA;
    if (a >= b) {
        lenBtoA = a - b;
    } else {
        lenBtoA = b - a;
    }
    if (a >= c) {
        lenCtoA = a - c;
    } else {
        lenCtoA = c - a;
    }
    if (lenBtoA > lenCtoA) {
        console.log("Точка С ближе к А")
    } else if (lenBtoA < lenCtoA) {
        console.log("Точка B ближе к А")
    } else {
        "Расстояние одинаковое"
    }
    /*Задание No5.
    Даны целочисленные координаты точки на плоскости. Если точка совпадает с началом координат, то вывести 0.
    Если точка не совпадает с начало координат, но лежит на оси OX или OY, то вывести соответственно 1 или 2.
    Если точка не лежит на координатных осях, то вывести 3.
     */
    let x = +prompt("Введите координаты х");
    let y = +prompt("Введите координаты y");
    if (x == 0 && y == 0) {
        console.log(0);
    } else if (x != 0 && y == 0) {
        console.log(1)
    } else if (x == 0 && y != 0) {
        console.log(2)
    } else {
        console.log(3)
    }
    /*Задание No6.
    Даны координаты точки, не лежащей на координатных осях OX и OY. Определить
    номер координатной четверти, в которой находится данная точка.
     */
    let x = +prompt("Введите координаты х");
    let y = +prompt("Введите координаты y");
    if (x > 0 && y > 0) {
        console.log('координаты лежат в I четверти');
    } else if (x < 0 && y > 0) {
        console.log('координаты лежат в II четверти');
    } else if (x < 0 && y < 0) {
        console.log('координаты лежат в III четверти');
    } else if (x > 0 && y < 0) {
        console.log('координаты лежат в II четверти');
    } else {
        console.log("Введите координаты не лежащие на осях X и Y")
    }
    /*Задание No7.
    Даны целочисленные координаты трех вершин прямоугольника, стороны которого параллельны координатным осям.
    Найти координаты его четвертой вершины.
     */
    let x1 = +prompt("Введите координаты х1");
    let y1 = +prompt("Введите координаты y1");
    let x2 = +prompt("Введите координаты х2");
    let y2 = +prompt("Введите координаты y2");
    let x3 = +prompt("Введите координаты х3");
    let y3 = +prompt("Введите координаты y3");
    let x4 = x1;
    let y4 = y3;
    console.log(`коодинаты четвертой вершины = ${x4} , ${y4}`);
    /*Задание No8.
    Дан номер года (положительное целое число). Определить количество дней в этом году, учитывая, что обычный год
    насчитывает 365 дней, а високосный — 366 дней. Високосным считается год, делящийся на 4, за исключением тех годов,
    которые делятся на 100 и не делятся на 400 (например, годы 300, 1300 и 1900 не являются високосными, а 1200 и 2000 —
    являются).
     */
    let year = +prompt("Ведите год");
    if (year % 4 != 0) {
        console.log('Дней в году 365')
    } else if (year % 100 != 0) {
        console.log('Дней в году 366')
    } else if (year % 400 != 0) {
        console.log('Дней в году 365')
    } else {
        console.log('Дней в году 366')
    }
    /*Задание No9.
    Дано целое число. Вывести его строку-описание вида «отрицательное четное число»,
    «нулевое число», «положительное нечетное число» и т. д.
    */
    let num = +prompt("Введите число")
    if (num == 0) {
        console.log("нулевое число")
    } else if (num > 0 && num % 2 == 0) {
        console.log("положительное четное число")
    } else if (num > 0 && num % 2 != 0) {
        console.log("положительное нечетное число")
    } else if (num < 0 && num % 2 == 0) {
        console.log("отричательное четное число")
    } else if (num < 0 && num % 2 != 0) {
        console.log("отрицательное нечетное число")
    }
    /*Задание No10.
Дано целое число, лежащее в диапазоне 1–999. Вывести его строку- описание вида
«четное двузначное число», «нечетное трехзначное число» и т. д.
*/
    let num = +prompt("Введите число")

    if (num >= 1 && num <= 9 && num % 2 != 0) {
        console.log('нечетное однозначное число')
    } else if (num >= 1 && num <= 9 && num % 2 == 0) {
        console.log('четное однозначное число')
    } else if (num >= 10 && num <= 99 && num % 2 != 0) {
        console.log('нечетное двузначное число')
    } else if (num >= 10 && num <= 99 && num % 2 == 0) {
        console.log('четное двузначное число')
    } else if (num >= 100 && num <= 999 && num % 2 == 0) {
        console.log('четное трехзначное число')
    } else if (num >= 100 && num <= 999 && num % 2 != 0) {
        console.log('нечетное трехзначное число')
    } else {
        console.log('Выбрано неправильное число , диапозон 1-999')
    }
    /*Задание No11. Какие значения выведет цикл while?
    Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
    Оба цикла выводят alert с одинаковыми значениями или нет?

    Префиксный вариант ++i:
    let i = 0;
    while (++i < 5)
        alert( i );
    Постфиксный вариант i++
    let i = 0;
    while (i++ < 5)
        alert( i );
      В префиксном варианте последний вывод будет 4,а в постфиксном 5
    ========================================================================================================================

    Задание No12. Какие значения выведет цикл for?
    Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом. Оба цикла выведут alert с
    одинаковыми значениями или нет?
    Постфиксная форма:
    for (let i = 0; i < 5; i++)
    alert( i );
    Префиксная форма:
    for (let i = 0; i < 5; ++i)
    alert( i );

    Выведутся одинаковые значения
    ========================================================================================================================

    Задание No13. Выведите чётные числа
    При помощи цикла for выведите чётные числа от 2 до 10.
    */
    for (let i = 2; i <= 10; i++)
        if (i % 2 == 0) {
            alert(i);
        }
    /*Задание No14. Замените for на while
    Перепишите код, заменив цикл for на while, без изменения поведения цикла.
    for (let i = 0; i < 3; i++) {
     alert( `number ${i}!` );
    }
    */
    let i = 0;
    while (i < 3) {
        alert(`number ${i}!`);
        i++;
    }
    /*
    Задание No15. Повторять цикл, пока ввод неверен
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить
ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
     */
    while (true) {
        i = prompt("Введите число")
        if (i === null) {
            break;
        } else if (i < 100) {
            alert("Попробуйте еще раз")
            continue;
        } else if (i >= 100) {
            alert(`Верно ваше число ${i}`);
            break;
        }
    }
    /*
   Задание No16. Вывести простые числа
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при его делении на любое число от 1 до n есть остаток.
Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4. Напишите код,
который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.
     */

    let n = +prompt('Укажите конец интервала');
    let no_prime = 0;
    let prime = 0;
    let i;
    let j;
    for (i = 2; i <= n; i++) {
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                no_prime = i;
                break;
            }
        }
        if (i != no_prime) {
            prime = i;
            alert(`${prime} - простое число`);
        }
    }
    /*
        Задание No17.
        Вычислить среднее арифметическое 2-ух чисел, введенных пользователем.
    */
    let num1 = +prompt("Введите число 1");
    let num2 = +prompt("Введите число 2");
    console.log((num1 + num2) / 2);
    /*
    Задание No18.
    Напишите скрипт, который вычислит квадрат любого введённого числа.
     */
    let num = +prompt("Введите число");
    console.log(num ** 2);
    /*
    Задание No19.
    Примите от пользователя 3 числа. Выведите на экран разницу большего и меньшего из них.
     */
    let numb1 = +prompt('Введите число');
    let numb2 = +prompt('Введите число');
    let numb3 = +prompt('Введите число');
    let namMin
    let namMax

    if (numb1 <= numb2 && numb1 <= numb3) {
        namMin = numb1;
    } else if (numb2 <= numb1 && numb2 <= numb3) {
        namMin = numb2;
    } else if (numb3 <= numb1 && numb3 <= numb2) {
        namMin = numb3;
    }
    if (numb1 >= numb2 && numb1 >= numb3) {
        namMax = numb1;
    } else if (numb2 >= numb1 && numb2 >= numb3) {
        namMax = numb2;
    } else if (numb3 >= numb1 && numb3 >= numb2) {
        namMax = numb3;
    }
    console.log(namMax - namMin);
    /*
    Задание No20.
Напишите программу, проверяющую число, введенное с клавиатуры на четность.
    */
    let numb
    do {
        let numb = prompt('Введите число');
        if (numb === null) {
            break;
        } else if (numb % 2 == 0) {
            alert('Число четное')
        } else {
            alert('Число нечетное')
        }
    }
    while (true)
    /*
    Задание No21.
Дано натуральное число а (a<100). Напишите программу, выводящую на экран количество цифр в этом числе и сумму этих цифр
     */
    let num = prompt('Введите число');
    alert(num.length)
    alert(+num[0] + +num[1])
    /*
    Задание No22.
Известно, что 1 дюйм равен 2.54 см. Разработать скрипт, переводящий дюймы в сантиметры и наоборот. Диалог с
пользователем реализовать через браузер
    */
    let convert = +prompt('Для ковертации дюймов в см введите 1 ,для см в дюймы введите 2')
    let num = prompt('Введите число')
    if (convert == 1) {
        alert(`${num} duim это ${num * 2.54} см`)
    } else if (convert == 2) {
        alert(`${num} см это ${num / 2.54} duim`)
    }
    /*
    Задание No23. Найти сумму или произведение цифр трехзначного числа
    Пользователь вводит через prompt трёхзначное число. Проверить трехзначное число на четность и найти сумму его цифр,
    если число четное, или произведение его цифр, если число нечетное.
    */
    let num = prompt('Введите число');
    if (num.length != 3) {
        alert('Введите трехзначное число')
    } else if (num.length == 3 && num % 2 == 0) {
        alert(+num[0] + +num[1] + +num[2])
    } else if (num.length == 3 && num % 2 != 0) {
        alert(+num[0] * +num[1] * +num[2])
    }
    /*
    Задание No24. Определить существование треугольника по трем сторонам
    У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто <лягут> на третью и
    треугольника не получится.
    Пользователь вводит поочерёдно через prompt длины трех сторон.
    Напишите код, который должен определять, может ли существовать треугольник при таких длинах. Т. е. нужно сравнить
    суммы двух любых сторон с оставшейся третьей стороной. Чтобы треугольник существовал, сумма всегда должна быть больше
    отдельной стороны.
     */
    let len1 = +prompt('Введите длинну 1')
    let len2 = +prompt('Введите длинну 2')
    let len3 = +prompt('Введите длинну 3')
    if ((len1 + len2) > len3 || (len2 + len3) > len1 || (len3 + len2) > len1 || (len3 + len1) > len2) {
        alert('Треугольник может существовать')
    } else {
        alert('Треугольник неможет существовать')
    }
    /*
    Задание No25. Принадлежность точки окружности
Даны координаты точки A(x = 4, y = 9) и радиус окружности (R = 10) с центром в начале координат.
Напишите код, который будет выводить сообщение о том, лежит ли данная точка внутри окружности или за её пределами.
Для извлечения квадратного корня из числа z вам понадобится метод Math.sqrt(z).
Например: let a = Math.sqrt(4); // a=2
     */
    let x = +prompt(x);
    let y = +prompt(y);
    let r = 10;
    let z = Math.sqrt((x ** 2) + (y ** 2));
    if (r > z){
        alert('Точка лежит в окружности')
    }else if (r<z){
        alert('Точка не лежит в окружности')
    }
    /*
    Задание No26. Объекты
Напишите код, выполнив задание из каждого пункта отдельной строкой:
• Создайте пустой объект user.
• Добавьте свойство name со значением John.
• Добавьте свойство surname со значением Smith.
• Измените значение свойства name на Pete.
• Удалите свойство name из объекта.
     */
    let user = {};
    user.name = 'John';
    user.surname = 'Smith';
    user.name = 'Pete';
    delete user.name;

    /*
    Задание No27. Объекты-константы
Можно ли изменить объект, объявленный с помощью const? const user = {
name: "John" };
user.name = "Pete"; // нельзя
    */
    /*

Задание No28. Сумма свойств объекта
Есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
John: 100, Ann: 160, Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.
     */
    let salaries = {
        John: 100, Ann: 160, Pete: 130
    }
    let sum = 0
    for (let key in salaries ){
        sum += salaries[key]
    }
    alert(sum)
    /*
    Задание No29. Бесконечный цикл по ошибке
Этот цикл – бесконечный. Он никогда не завершится, почему?
let i = 0;
while (i != 10) {
i += 0.2;
 console.log(i)}     //т к число никогда не будет равно 10 из-за дробной части
     */

</script>
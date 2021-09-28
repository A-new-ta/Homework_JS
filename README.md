***N.03 Домашнее задание ANKETA***

https://a-new-ta.github.io/Homework_JS/anketa/

Создать проект ANKETA. Спросить у пользователя: фамилию, имя, отчество РАЗДЕЛЬНО (оператором prompt) возраст в годах (оператором prompt) пол (оператором confirm, например, "ваш пол - мужской?") и вывести оператором alert анкету пользователя по примеру:

ваше ФИО: Иванов Иван Иванович

ваш возраст в годах: 20

ваш возраст в днях: 7300

через 5 лет вам будет: 25

ваш пол: мужской

вы на пенсии: нет

Должен быть контроль корректности вводимых пользователем данных (например, фамилия не должна быть пустой, возраст должен быть корректной цифрой и т.д.). Оператор alert в коде должен использоваться ровно один раз.


***N.05 Домашнее задание TREESUM***

https://a-new-ta.github.io/Homework_JS/treesum/

Разработать «чистую» функцию treeSum, которая получает массив, элементы которого могут быть числами или снова массивами, и так до любого уровня. Функция должна рассчитать и вернуть сумму всех числовых элементов массива со всех уровней. При написании функции не описывать каких-либо вложенных в неё функций. Проверить работу функции можно на следующем массиве (сумма 50):

    [5, 7,
      [ 4, [2], 8, [1,3], 2 ], 
        [ 9, [] ], 
        1, 8
      ]


***A2+***

https://a-new-ta.github.io/Homework_JS/a2+/

Написать чистую функцию, эффективно удаляющую из переданной ей строки все начальные и конечные пробелы.
Не используйте метод строки trim.
Не используйте массивы (это неэффективно в данной задаче).
Если умеете работать с регулярными выражениям - не используйте и их :)
Спросите у пользователя строку, уберите из неё с помощью этой функции начальные и конечные пробелы, и выведите в alert результат, добавив к нему слева и справа какой-нибудь символ, чтобы было очевидно, что пробелов нет.

***A3+***

https://a-new-ta.github.io/Homework_JS/a3+/index.html

Написать чистую функцию, проверяющую, что переданная ей фраза является палиндромом.
(Палиндром - это фраза, которая слева направо читается так же как справа налево)
Массивы при решении не использовать.
При проверке должны игнорироваться:
 - регистр букв;
 - пробелы;
 - знаки препинания;
 - мягкие и твёрдые знаки;
 - разница между буквами "е" и "ё".
Спросить у пользователя строку. Вывести через alert сообщение "это палиндром" или "это не палиндром".

***A4+***

https://a-new-ta.github.io/Homework_JS/a4+/index.html

Написать чистую функцию, проверяющую, что переданная ей фраза является палиндромом, с использованием рекурсии.
Массивы при решении не использовать.
При проверке должны игнорироваться:
 - регистр букв;
 - пробелы;
 - знаки препинания;
 - мягкие и твёрдые знаки;
 - разница между буквами "е" и "ё".
Внимание: не надо строку очищать от игнорируемых символов с помощью рекурсии; рекурсию нужно применять только при проверке, является ли очищенная строка палиндромом.

***B1+***

https://a-new-ta.github.io/Homework_JS/b1+/index.html

Разработать чистую функцию, получающую год, и возвращающую век, к которому относится данный год.
(Например, 1980 год — 20 век, 2000 год — 20 век, 2001 год — 21 век.)
Функция не должна использовать if либо условную операцию, только оператор return.
Спросить у пользователя год. Отобразить пользователю соответствующий году век.

***N.07 Домашнее задание VOWELS***

https://a-new-ta.github.io/Homework_JS/vowels/index.html

Написать «чистую» функцию для эффективного подсчёта количества русских гласных букв в строке.
Регулярные выражения (кто умеет) не использовать.
Спросить у пользователя строку. Вывести в консоль количество русских гласных букв в ней.

***A1+***

https://a-new-ta.github.io/Homework_JS/a1+/index.html

Напишите функцию, отыскивающую все простые числа от 1 до 100.000 и возвращающую массив с ними. Функция не должна использовать массивы и хэши, кроме массива, в котором накапливаются возвращаемые значения.
Используйте всё что возможно для оптимизации скорости работы функции.
Замерьте скорость работы функции через console.time() и console.timeEnd().
Реализуйте эту же задачу алгоритмом "решето Эратосфена", двумя подходами - через массив и через хэш. Сравните производительность всех трёх реализаций.

***C2+***

https://a-new-ta.github.io/Homework_JS/c2+/index.html

С2+
Напишите функцию deepCopy для глубокого копирования переданного ей значения.
Функция должна получать число, строку, логическое значение, null, undefined, хэш или массив и возвращать его копию, включая все подхэши, подмассивы и т.д.
Напишите тесты правильной работы функции, как минимум такие...

Подумайте, как понятно написать тесты. В консоли мы должны видеть для каждого теста только "прошёл" или "НЕ ПРОШЁЛ", а ещё лучше - статистику, сколько тестов прошло, сколько нет.

***MOOD***

https://a-new-ta.github.io/Homework_JS/mood/index.html

N.10 Домашнее задание MOOD
Доработать проект MOOD (слайды N.10) так, чтобы цвета не повторялись.
Для контроля повторения цветов использовать хэш.

````
<script>
    "use strict";

    function randomDiap(n,m) {
            return Math.floor(Math.random()*(m-n+1))+n;
    }
    function mood(colorsCount) {
        var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
        console.log( 'цветов: ' + colorsCount );
        for ( var i=1; i<=colorsCount; i++ ) {
            var n=randomDiap(1,7);
            var colorName=colors[n];
            console.log( colorName );
        }
    }
    mood(3);

</script>
````

***B6+***

https://a-new-ta.github.io/Homework_JS/b6+/index.html

````
Напишите функцию для оборачивания текста в тег с атрибутами, с которой можно было бы работать в следующем стиле:
  var wrapP=buildWrapper("P");   // строим функцию для оборачивания текста в тег P
  console.log( wrapP("Однажды в студёную зимнюю пору") );
  // в консоль выводится строка "<P>Однажды в студёную зимнюю пору</P>"
  console.log( wrapP("Однажды в студёную зимнюю пору",{lang:"ru"}) );
  // в консоль выводится строка "<P lang='ru'>Однажды в студёную зимнюю пору</P>"
Функция должна учитывать, что некоторые символы надо заменять на HTML-мнемоники (а именно - символы < > ' " &):
  console.log( wrapP("Однажды в <студёную> зимнюю пору") );
  // в консоль выводится строка "<P>Однажды в &lt;студёную&gt; зимнюю пору</P>"
  var wrapH1=buildWrapper("H1"); // строим функцию для оборачивания текста в тег H1
  console.log( wrapH1("СТИХИ",{align:"center",title:"M&M's"}) );
  // в консоль выводится строка "<H1 align='center' title='M&amp;M&apos;s'>СТИХИ</H1>"
  ````
  
***C3+***

https://a-new-ta.github.io/Homework_JS/c3+/index.html

Напишите функцию deepComp для глубокого сравнения переданных ей значений.
Значения могут быть числами, строками, логическими значениями, хэшами, null, undefined, массивами, в т.ч. любого уровня вложения.
Учтите, что цикл for..in не гарантирует перебора ключей хэша в каком-либо порядке.
Не используйте Object.is().
Напишите тесты правильной работы функции, как минимум такие:
````
var H1={ a:5, b: { b1:6, b2:7 } };
var H2={ b: { b1:6, b2:7 }, a:5 };
var H3={ a:5, b: { b1:6 } };
var H4={ a:5, b: { b1:66, b2:7 } };
var H5={ a:5, b: { b1:6, b2:7, b3:8 } };
var H6={ a:null, b:undefined, c:Number.NaN };
var H7={ c:Number.NaN, b:undefined, a:null };
var H8={a:5,b:6};
var H9={c:5,d:6};
var H10={a:5};
var A1=[5,7];
var A2=[5,5,7];
var A3=[5,8,7];
deepComp(H1,H2) будет true
deepComp(H1,H3) будет false
deepComp(H1,H4) будет false
deepComp(H1,H5) будет false
deepComp(H6,H7) будет true
deepComp(H8,H9) будет false
deepComp(H8,H10) будет false
deepComp(null,H10) будет false
deepComp(H10,null) будет false
deepComp(null,null) будет true
deepComp(null,undefined) будет false
deepComp(5,"5") будет false
deepComp(5,H1) будет false
deepComp(A1,H1) будет false
deepComp(A2,A3) будет false
deepComp( {a:5,b:undefined}, {a:5,c:undefined} ) будет false
deepComp([5,7],{0:5,1:7}) будет false
deepComp( [5,7],{0:5,1:7,length:2} ) будет false
deepComp("aaa","bbb") будет false
deepComp(Number.NaN,Number.NaN) будет true
````

***B3+***

https://a-new-ta.github.io/Homework_JS/b3+/index.html

Написать функцию-калькулятор вручную введённого выражения (без использования функции eval и динамического описания функции new Function, если вы знаете о них).
Должны работать операции + - * / и скобки, числа должны приниматься целые, дробные (через точку), отрицательные
Например, вызываем функцию, передавая ей строку "2*(-3+1)", функция возвращает -4.

***vowels_arr***

https://a-new-ta.github.io/Homework_JS/vowels_arr/index.html

Переписать ДЗ VOWELS (подсчёт гласных букв в строке) без использования циклов, тремя способами:
с использованием метода массива forEach,
с использованием метода массива filter,
с использованием метода массива reduce.

***roots***

https://a-new-ta.github.io/Homework_JS/roots/index.html

Найти ошибку в функции нахождения корней квадратного уравнения (см. слайды по теме «Тесты»).
Доработать функцию так, чтобы тесты проходили успешно.

***drinks_hash_func***

https://a-new-ta.github.io/Homework_JS/drinks_hash_func/index.html

Создать проект DRINKS_HASH_FUNC.

1.Разработать класс HashStorageFunc в функциональном стиле (т.е. функцию-конструктор) для хранения в приватном хэше произвольных пар ключ-значение.
Ключ может быть любой строкой; значение может иметь любой тип, в том числе векторный (хэш, массив и т.д.)
Класс должен иметь следующий интерфейс (т.е. иметь следующие публичные методы):
addValue(key,value) — сохраняет указанное значение под указанным ключом; если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано;
getValue(key) — возвращает значение по указанному ключу либо undefined;
deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
getKeys() — возвращает массив, состоящий из одних ключей.
Класс должен быть чистым (не должен использовать никаких глобальных переменных, не должен «пачкать экран»).
Класс должен быть универсальным, т.е. не зависеть ни от структуры хранимых данных, ни от способа их последующего использования (в т.ч. не должен содержать никаких ссылок на DOM, т.к. может использоваться и вообще без веб-страницы).

2.Создать объект drinkStorage класса HashStorageFunc для хранения рецептов напитков.
Ключом является название напитка; значением — информация о напитке (алкогольный напиток или нет, строка с рецептом приготовления и т.д. по желанию).

3.Разработать веб-страницу для работы с хранилищем рецептов напитков.
На странице должны быть кнопки:
«ввод информации о напитке» — последовательно спрашивает название напитка, алкогольный он или нет, рецепт его приготовления; сохраняет информацию о напитке в хранилище.
«получение информации о напитке» — спрашивает название напитка и выдаёт (на страницу, в консоль или в alert) либо информацию о нём (по примеру, приведённому ниже), либо сообщение об отсутствии такого напитка в хранилище.
«удаление информации о напитке» — спрашивает название напитка и удаляет его из хранилища (если он там есть) с выдачей соответствующего сообщения в информационное окно.
«перечень всех напитков» — выдаёт в информационное окно перечень всех напитков из хранилища (только названия).


***drinks_hash_class***

https://a-new-ta.github.io/Homework_JS/drinks_hash_class/index.html

Создать проект DRINKS_HASH_CLASS по аналогии с проектом DRINKS_HASH_FUNC, только:

1. класс назвать HashStorageClass;

2. класс должен быть описан в ES6-стиле (ключевым словом class);

3. пары ключ-значение должны храниться в публично доступном хэше.

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

***B4+***

https://a-new-ta.github.io/Homework_JS/b4+/index.html

Дан большой массив слов - словарь.
Написать функцию, получающую два слова, и строящую за несколько шагов из первого слова второе, за каждый шаг меняя не более одной буквы, так, чтобы на каждом шаге получалось допустимое слово (слово из словаря).
Функция должна вернуть самую короткую цепочку шагов в виде строки.
Например, при работе со следующим словарём:
["ЛУЖА","МУЗА","ЛИРА","МЕХА","ЛИГА","ТАРА","ЛИПА","ТУРА","ПАРК","ЛОЖЬ","ЛУПА","ПЛОТ","МУРА","ПАУК","ПАУТ","ПЛУТ","ЛОЖА","СЛОТ","ПАРА"]
при вызове со словами "ЛИСА" и "ЛОСЬ", функция должна вернуть строку:
"ЛИСА-ЛИПА-ЛУПА-ЛУЖА-ЛОЖА-ЛОЖЬ-ЛОСЬ"
а при вызове со словами "МУХА" и "СЛОН" - строку:
"МУХА-МУРА-ТУРА-ТАРА-ПАРА-ПАРК-ПАУК-ПАУТ-ПЛУТ-ПЛОТ-СЛОТ-СЛОН"

***B7+***

https://a-new-ta.github.io/Homework_JS/b7+/index.html

Написать чистую функцию для форматирования числа заданной по форматной строке, например:
console.log( formatNumber(2.3,"# ### ###.##") );
// выдаёт "2.30"
console.log( formatNumber(12345.368,"# ### ###.##") );
// выдаёт "12 345.37"
В форматной строке символ "#":
 - после запятой кодирует обязательную цифру, т.е. после запятой в данном примере должно быть ровно два знака, в любом числе;
 - до запятой кодирует НЕобязательную цифру, т.е. до запятой в данном примере должно быть столько знаков, сколько требуется для отображения целой части числа.


***dyn_form***

https://a-new-ta.github.io/Homework_JS/dyn_form/index.html

Создать проект DYN_FORM. Разработать функцию, которая в переданном ей теге <form> динамически строит элементы формы по переданному ей массиву.
Вызвать эту функцию дважды с указанными ниже массивами, чтобы она построила на веб-странице две формы по указанным ниже образцам. Точном соответствия внешнего вида форм образцам добиваться не обязательно.
В качестве скрипта, обрабатывающего данные форм (атрибут action тега form), можно указывать https://fe.it-academy.by/TestForm.php

 ````
    var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];
````
  
    
***scales***

https://a-new-ta.github.io/Homework_JS/scales/index.html
    
Создать проект Scales (весы).

Разработать класс Весы (Scales), имеющий:
массив добавленных на весы Продуктов (объектов класса Product);
метод add для добавления нового Продукта на весы;
метод getSumScale для получения суммарного веса добавленных Продуктов;
метод getNameList для получения списка наименований добавленных Продуктов в виде массива.
Добавляемые методом add Продукты (объекты класса Product) должны иметь методы getScale и getName.
Разработать минимум два различных класса продуктов (например, Яблоко (Apple) и Помидор (Tomato)), наследующих от Product методы getScale и getName.

Создать объект класса Весы.
Создать несколько объектов классов Яблоко, Помидор и т.д. с различными именами и весами, добавить их на весы, выдать в консоль результат работы методов getSumScale и getNameList.
    

***chess***

https://a-new-ta.github.io/Homework_JS/chess/index.html
    
Дана шахматная доска (8x8).
"Расстановкой ферзей" назовём такую расстановку 8 ферзей на шахматной доске,
при которой ни один из ферзей не может сбить ни одного другого ферзя.
(Ферзь бьёт в любом направлении - горизонтальном, вертикальном, диагональном)
1. Найдите все возможные расстановки.
2. Покажите каким-либо способом количество найденных расстановок.
3. Дайте возможность пользователю ввести номер расстановки или выбрать
   расстановку из списка.
4. Отобразите шахматную доску с выбранной расстановкой -
   расставленными ферзями (любым способом, каким умеете).
5. (если умеете) При нажатии мышью на любого из ферзей - подцвечивайте
   клетки доски, которые он "пробивает".
    

 ***dragndrop***

https://a-new-ta.github.io/Homework_JS/dragndrop/index.html
    
Реализовать на JavaScript возможность перетаскивания мышью по веб-странице этих картинок. Обрабатывать как минимум события mousedown, mousemove, mouseup; поддержку браузером drag&drop не использовать.
Изображения должны «таскаться» мышью за любую точку (т.е. и при «взятии» и при «отпускании» изображение смещаться не должно, оно должно смещаться только при смещении мыши при нажатой левой кнопке, ровно настолько, насколько смещена мышь).
Код не должен зависеть от количества картинок (т.е. код должен сам найти все картинки, которые есть на веб-странице).
Код никак не должен зависеть от того, как именно свёрстаны картинки — какие атрибуты и стилевые свойства им заданы.
Когда начинается перетаскивание какой-либо картинки, остальные картинки не должны сдвигаться.
Картинка, перетаскивание которой началось, должна сразу оказаться выше (ближе к глазам), чем остальные (z-index). После окончания перетаскивания картинки z-index ни одной из картинок меняться не должен, т.е. взаимный z-index картинок должен остаться тем же, каким был во время перетаскивания.
На время перетаскивания менять форму курсора на какую-нибудь подходящую.
Вёрстку страницы никак не менять; вся работа — только внутри тега <script>.
    

***valid_form***

https://a-new-ta.github.io/Homework_JS/valid_form/index.html
    
Разработать проект VALID_FORM. Внешний вид — примерно по образцу.
Поле «Дата запуска сайта» должно быть тегом ````<input type=date>````
Сделать валидацию вводимых значений; правила валидации продумать самостоятельно, описать их в комментариях; как минимум, пустое (начальное) значение каждого из полей должно считаться ошибочным.
При уходе с текстового поля формы или сразу при изменении чекбокса, радиогруппы, выпадающего списка — валидировать только данное поле и в случае ошибки сообщение об ошибке сразу отобразить справа от поля (сообщения об ошибках возле остальных полей не должны стираться); позволять пользователю уйти с поля, даже если оно заполнено с ошибкой.
При попытке отправки формы — валидировать сразу все поля и отобразить сразу все сообщения об ошибках рядом с ошибочно заполненными полями, а также скроллировать страницу к первому ошибочно заполненному полю и, если возможно, сфокусировать это поле.
В качестве скрипта, обрабатывающего данные формы (атрибут action тега form), можно установить https://fe.it-academy.by/TestForm.php
    

***d1+***

https://a-new-ta.github.io/Homework_JS/d1+/index.html
    
На странице (не впритык к краям окна браузера) расположите какую-либо прямоугольную картинку.
На каждом углу картинки, и на середине каждой стороны картинки расположите небольшой управляющий элемент, за которые можно перетаскивать, меняя размеры и пропорции картинки.
При перетягивании за угол - пропорции картинки не должны изменяться.
При перетягивании за середину стороны - пропорции картинки меняются.
При перетягивании за саму картинку (не за управляющие элементы) - картинка должна перемещаться.
Независимо от движений мыши, управляющие элементы должны всегда оставаться на углах и серединах сторон картинки.
Критерий качественного исполнения - при перетаскивании любого управляющего элемента, противоположный ему управляющий элемент не смещается ни на пиксель.

Подобное поведение, например, можно посмотреть в онлайн-SVG-редакторе: http://editor.method.ac/
нарисуйте прямоугольник, у него появятся те же 8 управляющих элементов,
попробуйте перетаскивать за них и отследите, как меняются размеры и пропорции прямоугольника.
Одна тонкость - при перетаскивании угловых элементов данный редактор позволяет произвольно менять соотношение сторон прямоугольника;
но вы реализуйте, чтобы угловые элементы меняли размер обеих сторон ПРОПОРЦИОНАЛЬНО.

    
***CLOCK_DOM***
    
 https://a-new-ta.github.io/Homework_JS/clock_dom/index.html
    
Создать проект CLOCK_DOM.
На странице — поле для ввода числа и кнопка «построить часы». По нажатию на кнопку — поле ввода числа и кнопка исчезают, и появляются стрелочные часы.
Диаметр циферблата — то что было введено в поле ввода числа; код должен уметь построить часы с любым диаметром в диапазоне от 200 до 800 пикселей.
Часы сразу начинают отображать правильное время, и далее оно изменяется раз в секунду.
При каждом обновлении времени выводить в консоль текущее время.
Цифры часов 1-12 не верстать вручную в HTML-коде, а создавать их и позиционировать в цикле; остальные теги можно сверстать в HTML-коде и только (при необходимости) стилизовать через JavaScript.
Никаких «волшебных констант» в коде не использовать — все константы (коэффициенты и т.д.) вынести в начало скрипта с чётким документированием.
    
 
***CLOCK_SVG***
    
 https://a-new-ta.github.io/Homework_JS/clock_svg/index.html
    
Реализовать часы (проект CLOCK_SVG) с использованием SVG.
Описание — в домашнем задании про проект CLOCK_DOM.
Поле для ввода числа и кнопку «построить часы» реализовать средствами HTML, не SVG.
    

***popup_menu***
    
 https://a-new-ta.github.io/Homework_JS/popup_menu/index.html
    
Создать проект POPUP_MENU.
Разработать функцию или класс формирования горизонтального меню с выпадающими при поднесении мыши подменю.
Меню должно динамически строиться по предоставленному массиву с пунктами.
Массив может быть произвольным, тестировать можно на следующем массиве:
````
var menu=[
  {name:'Пункт 1',submenu:
    [
      {name:'Пункт 1.1',submenu:
        [
          {name:'Пункт 1.1.1',url:'http://www.tut.by'},
          {name:'Пункт 1.1.2 длинный',url:'http://www.tut.by'}
        ]
      },
      {name:'Пункт 1.2',url:'http://www.tut.by'},
      {name:'Пункт 1.3 длинный',submenu:
        [
          {name:'Пункт 1.3.1',url:'http://www.tut.by'},
          {name:'Пункт 1.3.2',url:'http://www.tut.by'},
          {name:'Пункт 1.3.3',url:'http://www.tut.by'},
          {name:'Пункт 1.3.4 длинный',url:'http://www.tut.by'}
        ]
      }
    ]
  },
  {name:'Пункт 2 длинный',url:'http://www.tut.by'},
  {name:'Пункт 3',submenu:
    [
      {name:'Пункт 3.1 длинный',url:'http://www.tut.by'},
      {name:'Пункт 3.2',url:'http://www.tut.by'}
    ]
  }
];
````

***CLOCK_CANVAS***
    
https://a-new-ta.github.io/Homework_JS/clock_canvas/index.html
    
Реализовать часы (проект CLOCK_CANVAS) с использованием Canvas.
Описание — в домашнем задании про проект CLOCK_DOM.
Поле для ввода числа и кнопку «построить часы» реализовать средствами HTML, не Canvas.
    
    
***polyfill***
    
https://a-new-ta.github.io/Homework_JS/polyfill/index.html
    
Полифилы для методов map и forEach
    
    
***TENNIS_DOM***
    
https://a-new-ta.github.io/Homework_JS/tennis_dom/index.html
    
Реализовать игру «Теннис» методами DOM (проект TENNIS_DOM).
Мяч прыгает по полю, слева и справа ракетки его отбивают.
Размер поля НЕ резиновый, он должен быть задан на уровне JavaScript-кода константами.
Запуск мяча — по кнопке «старт!», при этом мяч вылетает прямо из середины поля в случайном направлении под случайным (в разумных пределах) углом.
Управление левой ракеткой — клавишами Shift (вверх) и Ctrl (вниз),
правой ракеткой — «стрелка вверх» и «стрелка вниз». Пока клавиша удерживается, ракетка плавно движется; клавиша отпущена — ракетка останавливается.
Если ракетка отбивает мяч — мяч должен отпрыгнуть от ракетки (а не долететь до стенки сквозь ракетку).
Если мяч долетает до левой или правой стенки — засчитывается гол (ведётся подсчёт очков) и до следующего нажатия «старт!» мяч остановлен возле самой стенки, прикоснувшись к ней.
    
    
***TENNIS_SVG***
    
https://a-new-ta.github.io/Homework_JS/tennis_svg/index.html
    
Реализовать игру «Теннис» (проект TENNIS_SVG) с использованием SVG.
Описание — в домашнем задании про проект TENNIS_DOM.
Кнопку «старт» реализовать средствами SVG (прямоугольник).


***TENNIS_CANVAS***
    
https://a-new-ta.github.io/Homework_JS/tennis_canvas/index.html
    
Реализовать игру «Теннис» (проект TENNIS_CANVAS) с использованием Canvas.
Описание — в домашнем задании про проект TENNIS_DOM.
Кнопку «старт» реализовать средствами HTML, не Canvas.
    
 
***DRINKS_LOC_STORAGE***
    
https://a-new-ta.github.io/Homework_JS/drinks_loc_storage/index.html
    
На основе класса HashStorageClass (из проекта DRINKS) разработать класс LocStorageClass (в модуле LocStorage.js) для хранения информации в localStorage.
На веб-странице создать два объекта класса LocStorageClass и реализовать два интерфейса (набора кнопок) — для работы с напитками и для работы с блюдами.
    
    
***DYN_FORM_AJAX*** 
    
https://a-new-ta.github.io/Homework_JS/dyn_form_ajax/index.html
    
Переделать проект DYN_FORM на использование AJAX — подгружать двумя AJAX-запросами массивы с описаниями форм из файлов:
https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json
https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json
Формы должны отобразиться на веб-странице строго в указанном порядке.

    
 ***CLOCK_MVC*** 
    
 https://a-new-ta.github.io/Homework_JS/clock_mvc/index.html
    
Создать проект CLOCK. Реализовать согласно концепции активного MVC:
Model — часы, класс Clock в файле Clock.js, могут идти (отображая актуальное время) либо стоять (отображая время на момент остановки);
View — реализовать три варианта:
класс ClockViewDOM в файле ClockViewDOM.js
для отображения часов средствами HTML/CSS/DOM;
класс ClockViewSVG в файле ClockViewSVG.js
для отображения средствами SVG и
класс ClockViewCanvas в файле ClockViewCanvas.js
для отображения средствами Canvas;
Controller — реализовать вариант старта/остановки часов кнопками,
класс ClockControllerButtons в файле ClockControllerButtons.js.
Создать шесть объектов часов, для двух установить отображение в DOM, ещё для двух — в SVG, и ещё для двух — в Canvas, расположить их на одной странице.
Каждые часы должны отображать текущее время в своём часовом поясе.
Все шесть часов должны независимо управляться своими кнопками «стоп» и «старт» (при загрузке страницы часы должны идти; по нажатию кнопки «стоп» стрелки должны останавливаться; по нажатию «старт» — переводиться на текущее время и снова идти).

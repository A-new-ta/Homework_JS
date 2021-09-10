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

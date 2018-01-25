# Hexlet-course-tasks

3.5 Функции и ящики
squareOfSum.js
Реализуйте функцию squareOfSum, которая находит квадрат суммы двух чисел по формуле: a² + 2 * a * b + b².
squareOfSum(2, 3) // 25
squareOfSum(1, 10) // 121
3.6 Условия и принятие решений
finalGrade.js
Реализуйте функцию finalGrade, которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.
Функция принимает два аргумента:
exam — оценка за экзамен, число от 0 до 100;
projects — количество проектов, число от 0 и выше.
Функция возвращает: число (итоговую оценку).
Есть четыре возможных итоговых оценки:
100, если оценка за экзамен выше 90 или есть больше 10 проектов
90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
0 в любом другом случае
Вот как должна работать ваша функция:
пример вызова         // что должна вернуть функция при таком вызове
finalGrade(100, 12);  // 100
finalGrade(99, 0);    // 100
finalGrade(10, 15);   // 100

finalGrade(85, 5);    // 90

finalGrade(55, 3);    // 75

finalGrade(55, 0);    // 0
finalGrade(20, 2);    // 0

3.7 О, нет, ошибки!
Обычно вам нужно избегать ошибок, но в этом упражнении вы будете порождать ошибки. Это поможет вам понять, какие типы ошибок возникают в разных ситуациях, и привыкнуть распознавать их в будущем.
Вы будете работать в двух файлах — reference.js и type.js. Ваша задача — породить 2 ошибки.
reference.js
Напишите функцию reference. Код внутри функции должен породить ошибку типа ReferenceError.
Вспомните, что ReferenceError возникает, когда используется несуществующий идентификатор (имя). Например, если ваша функция возвращает значение константы, но такой константы не существует. Или в каком-нибудь выражении (фрагмент кода, который вычисляется в значение, как формула) используется неизвестный идентификатор.
type.js
Напишите функцию type. Код внутри функции должен породить ошибку типа TypeError.
Вспомните, что TypeError возникает, когда вы используете неправильный тип. Например, если вы пытаетесь вызвать численную константу как функцию.

3.8 Рекурсия
sequenceSum.js
Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum, которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.
import sequenceSum from './sequenceSum';

sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3


Подсказки
Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является "пустой". Вычислить сумму чисел такой последовательности не представляется возможным, в этом случае возвращаем NaN
Сумма чисел последовательности, в которой begin === end, равна begin (или end)
// NaN (т.к. это "пустая" последовательность)
sequenceSum(7, 2);

// 0 (т.к. это единственное число, входящее в последовательность)
sequenceSum(0, 0);
// 6 (т.к. это единственное число, входящее в последовательность)
sequenceSum(6, 6);


В файле sequenceSum.test.js можно посмотреть все варианты параметров, с которыми будет вызвана ваша функция.
75% пользователей решило эту задачу самостоятельно

3.9 Итеративный процесс
smallestDivisor.js
Реализуйте тело функции smallestDivisor, используя итеративный процесс. Эта функция должна находить наименьший делитель заданного числа.
Доп. условия: число, передаваемое в функцию, больше нуля; делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).
Например, наименьший делитель числа 15 это 3.
smallestDivisor(15); // 3
smallestDivisor(17); // 17


Идея алгоритма:
Попробуйте разделить число на 2.
Если число делится без остатка, то это наименьший делитель.
Если нет, то попробуйте следующий делитель.
Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)
Подсказка
Вспомните про оператор % (modulus or остаток от деления) из урока 4. Он вычисляет остаток от деления одного операнда на другой. Например, 11%5 это 1, а 10%2 это 0.
Так что если x%y это 0, то y делит x без остатка.
3.11 Строки и работа с символами
solution.js
Реализуйте функцию reverse, которая переворачивает строку. Например:
reverse('hello, world!'); // !dlrow ,olleh


Подсказки
Длина строки str находится так: str.length
Не забудьте: индексы начинаются с 0, но длина — это реальная длина. Так что индекс последнего символа не совпадает с длиной строки.
3.12 Цикл for и изменение переменных
isPrime.js
Напишите функцию isPrime. Она принимает число и возвращает true, если число является простым, и false в ином случае.
Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя. Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.
Используйте цикл for и арифметические шорткаты.
isPrime(1);     // false
isPrime(7);     // true
isPrime(10);    // false

3.13 Тесты и автоматическая проверка кода
test.js
Проверьте с помощью утверждений (asserts) правильность работы функции factorial, которая вычисляет факториал переданного числа. Факториал числа x — это произведение всех чисел от 1 до x. Например, факториал числа 4 это 1 * 2 * 3 * 4 = 24.
Подробнее о факториале можно почитать в википедии.
Несколько примеров:
factorial(0); // 1
factorial(1); // 1
factorial(5); // 120


Вам необходимо добавить минимум три дополнительные проверки (помимо уже существующих в модуле), а именно: протестировать пограничные случаи (вызов с параметрами 0 и 1) и сделать проверку на работу с произвольными числами.
Подсказки
assert(<expression>) проверяет, что результат <expression> является истиной.
assert.equal(<actual>, <expected>) проверяет, что <actual> и <expected> равны (проверка на нестрогое равенство ==).

3.14 Модули
myMathModule.js
В файле myMathModule.js:
Создайте функцию getTriangleArea, которая принимает два аргумента h и b и вычисляет площадь треугольника по формуле A = 1/2 * h * b, где h — высота, а b — основание треугольника.

Пример:
getTriangleArea(5, 10) === 25;
getTriangleArea(15, 12) === 90;


Экспортируйте функцию.
solution.js
В файле solution.js:
Импортируйте getTriangleArea из модуля myMathModule.
Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n и основанием n2/2. Используйте функцию square.
Экспортируйте созданную функцию по умолчанию.

3.15 Выражения и инструкции
squares.js
Реализуйте функцию square, которая возвращает квадрат числа.
Реализуйте функцию sumOfSquares, которая возвращает сумму квадратов двух чисел.
Реализуйте функцию squareSumOfSquares, которая возвращает квадрат суммы квадратов двух чисел.
Примеры работы функций:
square(5); // 25
square(10); // 100
sumOfSquares(5, 10); // 125
sumOfSquares(10, -9); // 181
squareSumOfSquares(1, 1); // 4
squareSumOfSquares(2, 3); // 169


Обратите внимание на то, что самостоятельно вызывать их не надо. Это делает проверяющая система в файле __tests__/squares.tests.js
Подсказки
Функция square может быть использована внутри sumOfSquares
Функция sumOfSquares может быть использована внутри squareSumOfSquares

3.16 Окружение
Функции lessThan, greaterThan и isEqual в модуле comparers сравнивают две строки и возвращают true/false. Сравнение идет по количеству заглавных символов в строке (больше заглавных — больше строка).
Специальные символы (например, пробел) не имеют заглавных эквивалентов и в данном задании считаются заглавными.
Примеры:
greaterThan('AD', 'ad sd'); // true, сравнение на > (больше)
greaterThan('AD', '   Ad sd'); // false, сравнение на > (больше)
lessThan('ghe df', 'dfwe r D'); // true, сравнение на < (меньше)
isEqual('liSp', 'lisP'); // true


comparers.js
Допишите необходимые части функций bigLettersCount и compare для того, чтобы заработали функции lessThan, greaterThan и isEqual.
Функция compare, принимающая две строки first и second, работает по следующему алгоритму:
Если первая строка больше второй, то возвращается 1.
Если вторая строка больше первой, то возвращается -1.
Иначе возвращается 0.
Подсказки
Функция bigLettersCount должна принимать на вход строку str и высчитывать количество заглавных символов в ней.
Вычисление длины строки: length(str).
Перевод строки в верхний регистр: toUpperCase(str).
Проверка на то, что символ в верхнем регистре: toUpperCase(char) === char;

3.17 Типизация
addDigits.js
Реализуйте и экспортируйте по умолчанию функцию addDigits, которая работает следующим образом:
Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.
Для числа 38 процесс будет выглядеть так:
3 + 8 = 11
1 + 1 = 2
Результат: 2
Пример:
addDigits(10); // 1
addDigits(19); // 1
addDigits(38); // 2
addDigits(1259); // 8


Подсказка
Выделите процесс суммирования цифр в числе в отдельную функцию

3.18 Чистые функции
solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.
solution('hello, world!'); // Hello, World!


Подсказки
Вычисление длины строки: length(str).
Перевод строки/буквы в верхний регистр: toUpperCase(str).
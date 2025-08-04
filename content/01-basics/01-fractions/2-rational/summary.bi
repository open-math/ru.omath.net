@diagram
    flowchart TD
        integers["**Целые числа**<br>$$ \ldots, -2, -1, 0, 1, 2, \ldots $$"]
        integers -->|Проблема $1$| divisionGap["**Иногда не делятся нацело!**<br>$$ 1 : 2 = \ ? \qquad 7 : 2 = \ ? $$"]
        integers -->|Проблема $2$| partOfWhole["**Не обозначить часть от целого!**<br>Куски пиццы, шкура неубитого медведя..."]

        divisionGap --> portion["**Доли**<br>Делим объект на куски, берем сколько угодно кусков<br>«1 из 2»; «10 из 10»; «99 из 1»; «-3 из 4»"]
        partOfWhole --> portion

        portion -->|Нужно как-то компактно записывать| vulgarFraction["**Обыкновенные дроби**<br>Удобная запись долей через дробную черту<br>**Числитель** сверху (**Ч**ердак); **Знаменатель** снизу<br>$$ \frac{1}{2}; \qquad \frac{7}{2}; \qquad \frac{99}{1}; \qquad \frac{0}{-8}; \qquad \frac{-3}{4} $$"]

        vulgarFraction -->|Новый вид чисел — «долевые» числа, числа из долей| rationals["**Рациональные числа**<br>Числа, записываемые через обыкновенные дроби<br>Обозначают «части от целого», «целые» и «целые с частями»$$ r \in \mathbb{Q} = \frac{p}{q}, \quad p,q\in\mathbb{Z}, \quad q \neq 0 $$"]

        rationals -->|Дроби разные, суть та же!| basicProperty["**Основное свойство дробей**<br>Можно **домножить** или **сократить** на одно и то же число<br>Определяет **равенство** рациональных чисел!<br>$$ \frac{p}{q} = \frac{p\cdot n}{q\cdot n}; \qquad \frac{p}{q} = \frac{p : n}{q : n} $$"]
        rationals -->|Совместимо с нацело делящимися целыми| divisionIsFraction["**Дробная черта = деление нацело**<br>Можно сводобно менять одно на другое<br>$$ \frac{p}{q} = p : q; \qquad \frac{8}{4} = 8 : 4 = 2 $$"]

        basicProperty -->|Сокращаем до упора| irreducible["**Несократимые дроби**<br>Числитель и знаменатель взаимопростые<br>$$ \frac{1}{2}; \qquad \frac{11}{7}; \qquad \frac{0}{9}$$"]

# Зачем рациональные числа?

@list
    type: ol
    items:
        - |
            **Целых чисел не хватает для операции деления!**

            Есть целый ряд примеров деления целых чисел, ответы на которые невозможно записать в виде целого числа:

            $$ 7 : 2 = \ ? >>{big} 5 : 3 = \ ? >>{big} -9 : 4 = \ ? $$
        - |
            **Целые числа не позволяют обозначать "части от целого"!**

            @image
                src: assets/unknown-pizza-cuts.svg
                maxWidth: 730px
                caption: Слева целое число "$1$", а остальное целыми числами не выразить!

Для решения этих проблем приходится **расширять** целые числа -- придумывать новый вид чисел!

# Рациональные числа

<~ article|portion

<~ article|pizza-cuts-portions

Доли могут быть отрицательные, что обозначает долг: "$-2$ из $4$" или "$4$ из $-8$".
Если отрицательными являются и "взятые" доли и "все" доли, то это можно рассматривать как воровство уже украденного -- смысл все равно положительный: "$-2$ из $-4$" = "$2$ из $4$".

<~ article|common-fraction

<~ article|pizza-cuts-fractions

Обыкновенные дроби имеют два подвида:

@list
    type: ul
    items:
        - |
            **Правильные дроби**

            В правильных обыкновенных дробях числитель меньше знаменателя.
            Такие дробь обозначают "часть от целого".

            $$ \frac{1}{2}; \qquad \frac{3}{4}; \qquad \frac{5}{6} $$

        - |
            **Неправильные дроби**

            В неправильных обыкновенных дробях числитель больше или равен знаменателю.
            Такие дроби обозначают "целые" и "целые с частями".

            <~ article|pizza-cuts-fractions-improper

<~ article|rational-number

<~ article|rational-faq

<~ article|alex-half

<~ article|week-task

<~ article|forrest-gump

# Целые это рациональные

<~ article|integer-is-rational

@image
    src: assets/z-is-q.svg
    maxWidth: 800px
    invert: dark
    caption:
        main: Любое целое число является рациональным!
        secondary: И может быть записано по-разному!

<~ article|integer-is-rational-examples

<~ article|rational-restoration

# Деление = дробная черта

<~ article|division-is-fraction

<~ article|division-is-fraction-examples

# Единый тип чисел

Рациональные числа не просто добавляют какие-то новые сущности к числам.
Оказывается, любое целое число это тоже рациональное!
Поэтому рациональные числа являются **расширением** целых чисел!

{ #number-sets }
@image
    src: assets/number-sets.svg
    maxWidth: 600px
    invert: dark
    caption:
        main: Натуральные внутри целых, целые внутри рациональных
        secondary: Каждый тип чисел добавляет что-то новое

<~ article|number-classification

# Рациональная числовая прямая

Рациональные числа заполняют все промежутки между целыми числами на числовой прямой.
Но целые тоже могут быть записаны как дроби.
Поэтому вся числовая прямая состоит из рациональных чисел!
Для обозначения рациональных чисел на числовой прямой на доли делится единичный отрезок (например от $0$ до $1$).

@image
    src: assets/number-ray-all.svg
    maxWidth: 800px
    invert: dark
    caption: Всё есть рациональное число

<~ article|number-ray-orientation-examples

# Основное свойство дроби

<~ article|fraction-basic-property

@image
    src: assets/fraction-multiply-example.svg
    maxWidth: 800px
    invert: dark
    caption:
        main: Умножение числителя и знаменателя на одно и то же число
        secondary: Получаем эквивалентную дробь с **большим** количеством долей

@image
    src: assets/fraction-divide-example.svg
    maxWidth: 800px
    invert: dark
    caption:
        main: Деление числителя и знаменателя на одно и то же число
        secondary: Получаем эквивалентную дробь с **меньшим** количеством долей

<~ article|equal-rationals

<~ article|fraction-debt

<~ article|basic-property-examples

<~ article|fraction-mystery

# Сокращение дробей

<~ article|irreducible-fraction

Сокращать дроби в письменном формате можно двумя способами: развернуто через цепочку равенств или компактно:

@image
    src: assets/fraction-simplification.svg
    maxWidth: 700px
    invert: dark
    caption:
        main: Пример письменного сокращения дроби
        secondary: Сначала поделили на $2$, потом снова на $2$, потом на $3$

@image
    src: assets/fraction-simplification-compact.svg
    maxWidth: 300px
    invert: dark
    caption: Компактное письменное сокращение дроби

<~ article|how-to-simplify-fractions

@image
    src: assets/fraction-cancel-wrong.svg
    maxWidth: 700px
    invert: dark
    caption:
        main: Как НЕЛЬЗЯ сокращать
        secondary: Числа связаны сложением, вычитанием, делением -- сокращать нельзя!

@image
    src: assets/fraction-cancel-correct.svg
    maxWidth: 700px
    invert: dark
    caption:
        main: Как МОЖНО сокращать
        secondary: Только если числа связаны умножением

<~ article|fraction-simplification-examples
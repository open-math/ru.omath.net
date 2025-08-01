~ productRule article|../rules/product|rule-of-product

# Цепочки умножений

В математике, а особенно в комбинаторике, нам регулярно приходится иметь дело с цепочками умножений последовательных чисел.
Например:

$$ 5\cdot 4\cdot 3\cdot 2\cdot 1 $$

И в чем же проблема?
А в размере записи.
Уже в таком виде она занимает немало места.
Конечно, вместо этих умножений можно сразу записать ответ, $120$, и пользоваться им.

Можно.
А что если цепочка будет длиннее?
Например, вот такой:

$$ 1\cdot 2\cdot 3\cdot 4\cdot 5\cdot 6\cdot 7\cdot 8\cdot 9\cdot 10 \cdot 11\cdot 12\cdot 13\cdot 14\cdot 15\cdot 16\cdot 17\cdot 18\cdot 19 \cdot 20 $$

Если все это перемножить, то получится гигантское число, которое точно также неудобно использовать:

$$ 2 \ 432 \ 902 \ 008 \ 176\ 640 \ 000 $$

Невозможно нормально работать и выполнять операции ни с длинными цепочками умножений, ни с огромными числами в виде готового ответа.
Можно, конечно, использовать троеточие:

$$ 1\cdot 2\cdot \ldots \cdot 19 \cdot 20 $$

Это вполне рабочий вариант, который мы будем регулярно применять. Правда, он тоже занимает довольно много места.
Вот было бы классно, если подобные цепочки умножений идущих друг за другом чисел можно было записывать кратко и красиво...

# Факториал

Подобные умножения иногда встречаются в математике и почти на каждом шагу в комбинаторике.
Поэтому им дали своё название и обозначение.
Последовательное умножение чисел с $1$ по $n$ назвали факториалом и стали записывать как $n!$ (читается как "эн факториал"):

{ #factorial +toc link }
@term
    title: Факториал
    main: |
        Сокращенная запись произведения всех натуральных чисел от $1$ до $n$:

        $$ 1\cdot 2 \cdot 3 \cdot 4 \cdot \ldots \cdot n = n! $$

При раскрытии факториала числа обычно записывают по порядку.
Но мы знаем, что от перестановки множителей произведение не меняется, поэтому записывать числа можно и в обратном порядке, да и вообще как душе угодно:

{ #factorial-examples }
@example
    title: Примеры факториалов
    main: |
        @math
            1! = 1 \qquad 3! = 1\cdot 3\cdot 2 \qquad 5! = 5\cdot 4\cdot 3\cdot 2\cdot 1

@callout
    icon: assets/clock-fact.svg
    title: Минутка нумерологии
    content: |
        Любители совпадений крайне обрадуются, когда узнают, что в сутках ровно $4!$ часов!

        $$ 1\cdot 2\cdot 3\cdot 4 = 4! = 24 $$

        Но мало кто знает, что шесть недель -- это в точности $10!$ секунд!

        $$ 1\cdot 2\cdot \ldots \cdot 9 \cdot 10 = 10! = 3 \ 628 \ 800 $$

        Обязательно запомните эти факты, так как в дальнейшем они вам никогда не понадобятся!

Вспоминаем длинную цепочку умножений из начала статьи:

$$ 1\cdot 2\cdot 3\cdot 4\cdot 5\cdot 6\cdot 7\cdot 8\cdot 9\cdot 10 \cdot 11\cdot 12\cdot 13\cdot 14\cdot 15\cdot 16\cdot 17\cdot 18\cdot 19 \cdot 20 $$

При помощи факториала её можно записать **всего в три символа**.
Записываем только последнее число и добавляем восклицательный знак в конце:

$$ 20! $$

Просто, коротко и удобно!

# Рекуррентная формула

Факториал числа можно не только записать в виде цепочки умножений, но и выразить его через факториал предыдущего числа.
Например, если факториал $4$ умножить на число $5$, то получится уже $5!$:

$$ 4! \cdot 5 = 1\cdot 2\cdot 3\cdot 4\cdot 5 = 5! $$

Такие формулы, в которых каждый следующий результат можно получить через предыдущий, называют **рекуррентными**.
Только что мы нашли рекуррентную формулу факториала:

{ #factorial-recurrent +toc link="Рекуррентная формула" }
@statement
    title: Рекуррентная формула факториала
    main: |
        $$ n! = (n-1)! \cdot n $$
    sections:
        proof: |
            Запишем факториал $(n-1)!$ в правой части равенства как цепочку умножений.
            Получим цепочку умножений чисел с $1$ уже вплоть до $n$.
            А это и является $n!$ по [определению](factorial):

            $$ (n-1)! \cdot n = 1 \cdot 2 \cdot \ldots \cdot (n-1) \cdot n = n! $$

            $\blacksquare$

Рекуррентная формула факториала -- очень полезная штука.
Настолько, что её ещё иногда называют "основным свойством факториала".
Чем же она так хороша?
С её помощью можно сильно упрощать сложные выражения с факториалами и решать задачи, которые иным способом решить практически невозможно:

{ #recurrent-examples }
@example
    title: Рекуррентная формула в деле
    main: |
        Решите примеры:

        $$ а) \ \frac{1001!}{999!} \qquad б) \ \frac{1000! + 999!}{1001!} $$
    sections:
        Пояснение: |
            Провести вычисления "напрямую" тут невозможно.
            Слишком большие выходят числа.
            Поэтому остаётся только использовать рекуррентную [формулу](factorial-recurrent) факториала.
        "Пример а)": |
            Два раза подряд применяем рекуррентную формулу факториала для $1001!$.
            Затем сокращаем:

            $$ \frac{1001!}{999!} = \frac{\cancel{999!}\cdot 1000 \cdot 1001}{\cancel{999!}} =  1 \ 001 \ 000 $$
        "Пример б)": |
            Один раз применяем рекуррентную формулу для левого слагаемого в числителе и дважды для знаменателя:

            $$ \frac{1000! + 999!}{1001!} = \frac{999!\cdot 1000 + 999!}{999!\cdot 1000\cdot 1001} = \frac{\cancel{999!}\cdot(1000 + 1)}{\cancel{999!}\cdot 1000\cdot 1001}
            = \frac{\cancel{1001}}{1000\cdot \cancel{1001}} = \frac{1}{1000} = 0.001 $$

Как видим, с числами формула справляется прекрасно.
Но её можно применять и для работы с буквами.
Там тоже все будет красиво:

@example
    title: Буквенный переполох
    main: |
        Упростите выражение:

        $$ \frac{(n+2)!}{n!} - 2\frac{(n+1)!}{(n-1)!} + \frac{n!}{(n-2)!} $$
    sections:
        solution: |
            Последовательно в каждой из дробей используем рекуррентную [формулу](factorial-recurrent) и проводим сокращение:

            @math
                \frac{\cancel{n!} \cdot (n+1)\cdot (n+2)}{\cancel{n!}} - 2\frac{\cancel{(n-1)!}\cdot n \cdot (n+1)}{\cancel{(n-1)!}} + \frac{\cancel{(n-2)!}\cdot(n-1)\cdot n}{\cancel{(n-2)!}} = \\
                = (n+1)(n+2) - 2 n(n+1) + (n-1)n = \ldots

            Раскрываем скобки и проводим вычисления:

            @math
                \ldots = n^2 + 2n + n + 2 - 2n^2 - 2n + n^2 - n = 2

@callout
    icon: assets/cards-fact.png
    title: Как стать первооткрывателем?
    content: |
        Всего существует $52!$ способов перетасовать колоду карт.
        Это настолько огромное число, что одна только его запись состоит из $68$ цифр!
        Оно больше, чем количество атомов, из которых состоит наша планета (~$10^{50}$)!

        Просто хорошенько разок перетасуйте карты и очень даже вероятно, что вы **первый человек** на свете, у кого карты оказались именно в таком порядке!

# Убывающий факториал

Мы научились работать с цепочками умножений, которые начинаются с единицы.
Но ведь так бывает далеко не всегда!
Например:

$$ 100 \cdot 99 \cdot 98 \cdot 97 \qquad 11 \cdot 9 \cdot 10 \cdot 7 \cdot 8 \qquad 3\cdot 4 \cdot 5 \cdot 6 $$

Как коротко записывать их?
Факториал использовать не получится, потому что эти цепочки не содержат единицу.
Выходит, что никак...
Похоже, одного только факториала нам не хватает.

Встречаются такие неполноценные или **неполные** факториалы в комбинаторике, да и не только в ней, регулярно.
Для удобной работы с ним придумали убывающий факториал:

{ #falling-factorial +toc link }
@term
    title: Убывающий факториал
    main: |
        Цепочка умножений из $k$ уменьшающихся на единицу натуральных чисел, начиная с $n$.

        $$ n^{\underline{k}} = \underbrace{n \cdot (n-1) \cdot (n-2) \cdot \ldots \cdot (n- (k-1))}_{k \ множителей} $$

В конце цепочки множитель имеет вид $n-(k-1)$, а не $n-k$, потому что вычитаемое из $n$ в каждом множителе число ($0$ в первом, $1$ во втором, $2$ в третьем и т.д.) [на единицу меньше](last-explain) номера самого множителя.
Значит, в $k$-том множителе будет вычитаться $k-1$.

{ #last-explain }
@details
    $$ n^{\underline{k}} = \underbrace{(n-0)}_{1} \cdot \underbrace{(n-1)}_{2} \cdot \ldots \cdot \underbrace{(n-(k-1))}_{k} $$

    Видим, что в множителе с номером $1$ мы вычитаем $0$, в множителе с номером $2$ вычетаем $1$.
    Короче, вычитаем мы всегда на $1$ меньше, чем номер множителя.
    Значит, в $k$-том множителе будет вычитаться число на $1$ меньше, то есть $k-1$.

{ #falling-factorial-examples }
@example
    title: Примеры убывающих факториалов
    main: |
        $$ 100^{\underline{4}} = 100\cdot 99 \cdot 98 \cdot 97 \qquad 11^{\underline{5}} = 11 \cdot 9 \cdot 10 \cdot 7 \cdot 8 \qquad 6^{\underline{4}} = 3\cdot 4\cdot 5\cdot 6 $$

Формулу убывающего факториала можно довольно простым способом выразить через уже известный нам обычный факториал:

{ #falling-factorial-formula +toc link }
@statement
    title: Формула убывающего факториала
    main: |
        $$ n^{\underline{k}} = \frac{n!}{(n-k)!} $$
    sections:
        proof: |
            Итак, у нас есть убывающий факториал $n^{\underline{k}}$.
            По [определению](falling-factorial) он расписывается так:

            $$ n^{\underline{k}} = n \cdot (n-1) \cdot \ldots \cdot (n-(k-1)) $$

            Добавим недостающие множители, чтобы цепочка шла до единицы.
            Но лишние множители повлияют на финальный результат!
            Поэтому, чтобы ничего не поменялось, сразу же и поделим на добавленные лишние множители.
            Тогда они сократятся друг с другом и ничего не испортят:

            @math
                n^{\underline{k}} = \frac{ n \cdot \ldots \cdot (n-(k-1)) \cdot \yellow{(n-k) \cdot (n-k-1) \cdot \ldots \cdot 2 \cdot 1} }{\yellow{(n-k)\cdot(n-k-1)\cdot \ldots \cdot 2 \cdot 1}}

            Таким добавлением "лишних" множителей мы добились того, что сверху у нас по [определению](factorial) получился факториал числа $n$, записанный в обратном порядке, а снизу факториал $n-k$:

            $$ n^{\underline{k}} = \frac{n!}{(n-k)!} $$

            $\blacksquare$

Теперь, зная про убывающий факториал и его формулу, мы можем в короткой форме записывать неполные цепочки умножений последовательных чисел:

$$ 100^{\underline{4}} = \frac{100!}{96!} \qquad 11^{\underline{5}} = \frac{11!}{6!} \qquad 6^{\underline{4}} = \frac{6!}{2!} $$

Если есть убывающий факториал, то должен быть и возрастающий?
Он действительно существует, но используется редко, ведь достаточно цепочку умножений прочитать или записать в обратном порядке и возрастающий факториал превратится в убывающий.
Но не волнуйтесь, [он ждет вас](practice|increasing-factorial) в практикуме...

@callout
    icon: assets/liouville.png
    title: Первое трансцендентное число
    content: |
        Трансцендентными числами называют числа, которые нельзя представить как корень многочлена с целочисленными коэффициентами. Например, число $\sqrt{2}$ иррациональное, **но не трансцендентное**, потому что является корнем уравнения $x^2 - 2 = 0$.

        В $1844$ году французский математик Жозеф Луивилль нашел первое трансцендентное число -- **постоянную Луивилля**:

        $$ \sum\limits_{n=1}^{\infty} 10^{-n!} = 0.\mathbf{\blue{1}}\mathbf{\blue{1}}000\mathbf{\blue{1}}00000000000000000\mathbf{\blue{1}}\ldots $$

        Это число примечательно тем, что единицы в его записи стоят на местах, равных факториалам натуральных чисел:

        $$ 0.\underset{1!=1}{\mathbf{\blue{1}}} \ \underset{2!=2}{\mathbf{\blue{1}}}000\underset{3!=6}{\mathbf{\blue{1}}}00000000000000000\underset{4!=24}{\mathbf{\blue{1}}}\ldots $$

{ #zero-factorial link="Факториал нуля" }
# Нулевой факториал

Сядьте, если вы стоите и держитесь крепче, ведь сейчас мы разберем один из вечных математических вопросов.
Он не настолько легендарный, как вопрос про [деление на ноль](page|article|/applications/division-by-zero), но тоже довольно популярный.

Факториал мы [определили](factorial) просто как короткую и лаконичную запись цепочки произведений.
Другими словами, найти факториал числа $n$ значит буквально "взять и перемножить натуральные числа от $1$ до $n$".
Поэтому он может работать только для натуральных чисел:

$$ 1! = 1 >> 2! = 1 \cdot 2 >> 3! = 1\cdot 2\cdot 3 >> \cdots $$

Вопрос "А чему равен факториал $0$?" просто не имеет смысла.
Нельзя "взять и перемножить натуральные числа от $1$ до $0$", ведь перед нулем нет ни $1$, ни других натуральных чисел.
Факториал просто не предназначен для работы с числом $0$.

$$ 0! = \ ? $$

Казалось бы, ну не предназначен и не предназначен.
Фиг бы с ним!
Однако, просто закрыть глаза на этот вопрос не получится...

## Проблема с обычными факториалами

Давайте вспомним замечательную [рекуррентную формулу](factorial-recurrent) факториала:

$$ n! = (n-1)! \cdot n $$

Какая она красивая и удобная!
Просто сказка!
Уж она-то точно работает всегда!

@math
    4! = 3! \cdot 3
    \\
    3! = 2! \cdot 3
    \\
    2! = 1!\cdot 1

Ну, почти всегда...
Если мы подставим в нее $1$, то вместо ожидаемого ответа ($1$) получим вот такой облом:

$$ 1! = (1-1)! \cdot 1 = 0! \cdot 1 = \ ? $$

Упс...
Кажется, у нас проблемы! 🤔

## Проблема с убывающими факториалами

Если так посмотреть, факториал $n!$ и убывающий факториал $n^{\underline{n}}$ это по сути одно и то же -- цепочки умножений от $n$ вплоть до $1$.
Если их расписывать согласно определениям, то они **полностью совпадают**:

@math
    n! = \blue{n \cdot(n-1) \cdot \ldots \cdot 1}

    \\

    n^{\underline{n}} = n\cdot(n-1)\cdot\ldots\cdot\underbrace{(n-(n-1))}_{= 1} = \blue{n\cdot(n-1)\cdot\ldots\cdot 1}

    \\[5px]

    \boxed{n! = n^{\underline{n}}}

Окей, это понятно.
А что если для этого убывающего факториала использовать выведенную ранее [формулу](falling-factorial) через обычные факториалы?
Мы ведь получим тот же самый результат -- $n!$?
Давайте попробуем:

$$ n^{\underline{n}} = \frac{n!}{(n-n)!} = \frac{n!}{0!} = \ ? $$

Черт побери!
Призрак нулевого факториала преследует нас и не дает получать красивые ответы в красивых формулах!
Что же делать?! 😱

## Решение проблем

Итак, в различных формулах, связанных с факториалами, иногда возникает $0!$ и всеми силами препятствует получению очевидных ответов.
Из этих (далеко не единственных) неприятных ситуаций есть два выхода:

1. **Вводить нелепые ограничения** на формулы, чтобы не допустить возникновения $0!$. Но тогда мы не только усложняем формулы, но и вынуждены мириться с тем, что их нельзя использовать в очевидных и элементарных случаях.
2. **Тупо забить** и принять $0! = 1$. Все равно смысла никакого в факториале от $0$ нет, сам по себе он не используется, поэтому просто дадим ему такое значение, которое не ломает красивые формулы.

Математики выбрали второй вариант:

$$ 1! = (1-1)!\cdot 1 = 0!\cdot 1 = 1\cdot 1 = \boxed{1} \\ n^{\underline{n}} = \frac{n!}{(n-n)!} = \frac{n!}{0!} = \frac{n!}{1} = \boxed{n!} $$

{ #zero-factorial-meaning }
@important
    main: |
        Сам по себе $0!$ не имеет смысла, но он может возникнуть в формулах.
        По этому все согласились считать $0! = 1$, чтобы **не ломать красивые формулы**{ accent }.

## Похожие проблемы

Этот случай с факториалом не единственный в математике.
По схожим причинам число $1$ не относится ни к простым, ни к составным числам.
Его просто **удобно** оставить в одиночестве, без группы.
Это упрощает формулировку теорем.

В конце концов, математика работает с абстракциями.
Некоторые из них могут быть очень большими и сложными.
Для упрощения работы с ними люди придумывают "факториалы", разделяют числа на "простые" и "составные" и делают другие хитрые штуки.
И если новое понятие можно без ущерба и противоречий определить **проще**, то зачем лишний раз усложнять себе жизнь?

# Применение факториалов

В основе всей комбинаторики лежит [правило умножения](~productRule).
Именно из-за него практически любая комбинаторная задача сводится к цепочке умножений.
Поэтому факториалы очень активно используются в этом разделе математики.

## Последний заезд

В гранд-финале "Седалищных гонок" на креслах принимают участие $16$ человек. Для них заготовили $16$ "гоночных" кресел на колесиках.
Сколькими способами можно рассадить всех участников заезда на эти кресла?

@image
    src: assets/chairs-example.jpg
    maxWidth: 650px

На первое кресло множно усадить одного из шестнадцати гонщиков.
Вне зависимости от того, кого посадили первым, на второе кресло можно посадить одного из пятнадцати оставшихся и так далее.
По [правилу умножения](~productRule) находим количество способов рассадить всех участников:

$$ 16\cdot 15\cdot 14\cdot \ldots \cdot 2\cdot 1 $$

Мы получили цепочку умножений последовательных чисел.
Если их все перемножить, то получится большое число.
К счастью, мы уже знаем, как все это дело записать в коротком виде.
Всего существует $16!$ способов рассадить участников!

## Проблемы Деда Мороза

Работа у Деда Мороза непростая -- на Новый Год он раздает подарки хорошим детям.
Забравшись через дымоход в очередной дом Дед обнаружил внутри пятерых детишек, которые, по их заверениям, весь год вели себя хорошо.
В мешке у него $50$ подарков.
Сколькими способами он может раздать подарки этим детям?

@image
    src: assets/new-year.webp
    maxWidth: 450px

Все по новой: первому ребенку один из $50$ подарков, второму один из $49$ и так далее.
Нам вновь потребуется использовать [правило умножения](~productRule) и мы опять получим цепочку умножений:

$$ 50 \cdot 49 \cdot 48 \cdot 47 \cdot 46 $$

Эту цепочку мы теперь тоже можем записать в коротком виде:

$$ 50^{\underline{5}} = \frac{50!}{45!} $$

## Смысл нулевого факториала

Аналогии с комбинаторикой могут отчасти помочь разобраться и со смыслом нулевого факториала.
Представьте, что вам нужно развесить на бельевой веревке мокрую одежду: штаны, футболку и носки.
Сколькими способами это можно сделать?

Первым на веревку можно повесить любой из трех элементов одежды.
Вторым -- любой из двух оставшихся, третьим только последний оставшийся элемент одежды.
Посчитаем количество способов:

$$ 3\cdot 2\cdot 1 = 3! = 6 $$

Итак, всего $3!$ способов развесить $3$ элемента мокрой одежды.
А сколько тогда есть способов развесить $0$ элементов одежды?
**Только один -- никаких их не развесить.**

$$ 0! = 1 $$

@image
    src: assets/underwear.png
    maxWidth: 600px
    invert: dark
    caption: Развесить несуществующее белье?! Совсем там уже с ума посходили со своей математикой!
